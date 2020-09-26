import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import Image5 from './Image5.jpg';



export default function index() {
  return (
    <Container style={{marginBottom: '5rem', marginTop:'1rem', padding:'1rem'}}>
      <Row>
        <Col xs={6}>
          <p>The Bartlett Historic District, listed on the National Register of Historic Places, stands as a cohesive group of early 1900s commercial buildings, and reflects the town's prosperity achieved during the early 20th century as a cotton shipping center in central Texas. Nearly 90 percent of the buildings in the district are historically significant.</p>
          <br/>
          <p>
          Photographers and movie makers alike find the charm and historic area the ideal backdrop for their creativity.  See if you can find the more than six historic murals.  Somewhere added in the days of the Model T while others were added for movie sets. </p>
          <br/>
          <p>This is a hot spot for movie making!  You may have seen “The Lost Husband”, “Stars over Henrietta”, remake of “True Grit”, “Walking Dead”, and others.
          </p>
        </Col>
        <Col xs={6}>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image4}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image5}
      alt="First slide"
    />
  </Carousel.Item>
</Carousel>
        </Col>
      </Row>
    </Container>

  )
}