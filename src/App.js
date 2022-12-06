// Default imports
import React, { useState } from 'react';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
// Libraries
import 'tachyons';
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