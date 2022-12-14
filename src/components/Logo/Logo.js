import './logo.css';
import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner">
          <span role='img' aria-label='alien icon'>👽</span>
        </div>
        </Tilt>
    </div>
  )
};

export default Logo;