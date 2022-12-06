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
  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height)
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
      .then((response) => calculateFaceLocation(response))
      .catch((err) => console.log('error', err))
  };
  return (
    <div className="App">
      {/* <Particles params={particlesOptions} className='particles'/> */}
      <Navigation />
      <Signin />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <Facerecognition imageUrl={imageUrl} />
    </div>
  );
};

export default App;