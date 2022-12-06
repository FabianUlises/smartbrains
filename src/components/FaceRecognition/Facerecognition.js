import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({ imageUrl, box }) => {
  return (
    <div>
      <div className="absolute mt2 image-container">
        <img id='input-image' src={imageUrl} width='500px' height='auto' alt='random face for face detection'/>
        <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  )
}

export default Facerecognition;