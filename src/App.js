// Default imports
import React, { useState } from 'react';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
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
// Input hanlder functions
const onInputChange = (e) => {
  console.log(e.target.value);
};
const onButtonSubmit = () => {
  console.log('click');
  clarapp.models
    .predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/face-det.jpg")
    .then(
    function(response) {
      console.log(response)
    },
    function(err) {
      console.log('error', err)
    }
  )
};
function App() {
  const [input, setinput] = useState('');
  return (
    <div className="App">
      {/* <Particles params={particlesOptions} className='particles'/> */}
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      {/* <FaceRecognition /> */}
    </div>
  );
};

export default App;