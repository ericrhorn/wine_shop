import React from 'react'

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/wine_bar.jpeg';

 
import 'bootstrap/dist/css/bootstrap.css'; 

function HomeImages() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    {/* <div style={{border: 'solid red 2px', width: '100%', height: '500px', margin: ' 50px 0'}}>
      <h1>Home Images</h1>
    </div> */}
    <div style={{ display: 'block', width: '100%', height: '500px', margin: '20px'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="" style={{height: '500px', width:'97%'}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="" style={{height: '500px', width:'97%'}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="" style={{height: '500px', width:'97%'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

    </>
  )
}

export default HomeImages

