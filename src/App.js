// Default imports
import React, { useState } from 'react';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/FaceRecognition/Facerecognition';
import Signin from './components/Signin/Signin';
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
        console.log('response')
        displayFaceBox(calculateFaceLocation(response))
      })
      .catch((err) => 
        console.log('error', err)
      );
  };
  // Handle sign in route
  const routeChange = (route) => {
    setRoute(route);
  }
  return (
    <div className="App">
      {/* <button onClick={onRouteChange}>click me</button> */}
      {/* <Particles params={particlesOptions} className='particles'/> */}
      <Navigation routeChange={routeChange} />
      { route === 'signin'
        ? <Signin routeChange={routeChange}/>
        : <div>
            <Rank />
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
            <Facerecognition imageUrl={imageUrl} box={box} />
          </div>

      }
    </div>
  );
};

export default App;