import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', marginRight: '.5rem', paddingBlockStart: '1rem' }}>
        <Logo />
        <p className='f3 link dim underline pa3 pointer'>sign out</p>
    </nav>
  )
};

export default Navigation;