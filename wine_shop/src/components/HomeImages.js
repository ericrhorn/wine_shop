import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 

import ExampleCarouselImage from '../assets/wine_bar.jpeg';
import Chateau from '../assets/carousel/chateau.jpeg'
import Patio from '../assets/carousel/patio.jpeg'
import Patio2 from '../assets/carousel/patio2.jpeg'
import Tasting from '../assets/carousel/tasting_room.jpeg'
import Vinyard from '../assets/carousel/vinyard.jpeg'
import Barel from '../assets/carousel/wine_barel.jpeg'


function HomeImages() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: '100%', height: '500px', margin: '100px 0'}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={Chateau} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={Patio} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={Tasting} alt="" style={{ height: '500px', width:'30%' }} />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={Vinyard} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={Barel} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={Patio2} alt="" style={{ height: '500px', width:'30%' }} />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={ExampleCarouselImage} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={ExampleCarouselImage} alt="" style={{ height: '500px', width:'30%' }} />
            <img src={ExampleCarouselImage} alt="" style={{ height: '500px', width:'30%' }} />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeImages;
