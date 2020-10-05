import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroImage1 from './hero1.jpg';
import HeroImage2 from './hero2.jpg';
import HeroImage3 from './hero3.jpg';
import HeroImage4 from './hero4.jpg';

export default function Hero() {
  return (
    <Carousel style={{color: 'white'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage2}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>Bartlett Venue</h3>
          {/* <p>Host your next event in this Historic District outside Austin, TX.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pesky Rabbit</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Historic Downtown Bartlett</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Pesky Rabbit</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}