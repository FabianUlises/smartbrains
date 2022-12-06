import React from 'react';
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='f3'>
        <p>
            {'This magic brain will detect faces in your pictures. Give it a try'}
        </p>
        <div className="input-container w-70 center">
            <input type="text" className='f4 pa2 w-70 center' onChange={onInputChange}/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
    </div>
  )
}
export default ImageLinkForm;