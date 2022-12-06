import React from 'react';

const Facerecognition = ({ imageUrl }) => {
  return (
    <div>
      <img id='input-image' src={imageUrl} width='500px' height='auto'/>
    </div>
  )
}

export default Facerecognition;