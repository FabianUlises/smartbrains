import React from 'react';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
// Libraries
import 'tachyons';
// import Particles from 'react-particles-js';
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
  return (
    <div className="App">
      {/* <Particles params={particlesOptions} className='particles'/> */}
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;