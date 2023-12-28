import React from 'react';
import wineBar from '../assets/wine_bar.jpeg';

function Banner() {
  return (
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '100%', overflow: 'hidden', marginBottom: '50px'}}>
      <img src={wineBar} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
    
  )
}

export default Banner