import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ routeChange, isSignedIn }) => {
  return(
    <div>
      {
        isSignedIn 
        ? <nav style={{ display: 'flex', justifyContent: 'space-between', marginRight: '.5rem', paddingBlockStart: '1rem' }}>
            <Logo routeChange={routeChange} />
            <p onClick={() => routeChange('signout')} className='f3 link dim underline pa3 pointer'>sign out</p>
        </nav>
        : <nav style={{ display: 'flex', justifyContent: 'space-between', marginRight: '.5rem', paddingBlockStart: '1rem' }}>
            <Logo routeChange={routeChange} />
            {/* <p onClick={() => routeChange('signin')} className='f3 link dim underline pa3 pointer'>sign out</p> */}
          </nav>
      }
    </div>
  )
};

export default Navigation;