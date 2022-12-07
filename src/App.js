// Default imports
import React, { useEffect, useState } from 'react';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/FaceRecognition/Facerecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
// Libraries
import 'tachyons';
// Clarifai api
import Clarifai from 'clarifai';
const clarapp = new Clarifai.App({
  apiKey: '8cf04e051dd64b588b12aea62d8205f7'
 });

// Variables
// Options for particles;
const particlesOptions = {
  particles: { 
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
function App() {
  const [input, setinput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });
  // Calculate dimensions to display box around face
  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#input-image');
    const height = Number(image.height);
    const width = Number(image.width);
    console.log(height, width);
    // Returning object with data containing location points
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * width)
    }
  }
  // Update box sate
  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };
  // Input hanlder functions
  const onInputChange = (e) => {
    setinput(e.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    clarapp.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        input)
      .then((response) => {
        if(response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              setUser({
                ...user,
                entries: count
              })
            })
        }
        displayFaceBox(calculateFaceLocation(response))
      })
      .catch((err) => 
        console.log('error', err)
      );
  };
  // Handle sign in route
  const routeChange = (route) => {
    if(route === 'signout') {
      setRoute('signin');
      setIsSignedIn(false);
    } else if(route === 'home') {
      setIsSignedIn(true);
      setRoute(route)
    }
  }
  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }
  // useEffect
  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(console.log)
  }, []);
  return (
    <div className="App">
      {/* <Particles params={particlesOptions} className='particles'/> */}
      <Navigation routeChange={routeChange} isSignedIn={isSignedIn}/>
      { route === 'home'
        ? <div>
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
            <Facerecognition imageUrl={imageUrl} box={box} />
          </div>
        : (
          route === 'signin'
          ?
            <Signin routeChange={routeChange} />
          : route === 'register'
          ?
            <Register routeChange={routeChange} loadUser={loadUser} />
          :
          <Signin routeChange={routeChange} route={route} />
        )
      }
    </div>
  );
};

export default App;