import React from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import Garden from './garden.jpg';
import MM from './mb.jpg';
import PR from './pr.jpg';

export default function cards() {
  return (
    <Container>
      <h2>Select from the available options . . .</h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={PR} />
          <Card.Body>
            <Card.Title>Pesky Rabbit</Card.Title>
            <Card.Text>
              Capacity: 100 Theater, 120 Cocktail, 50-75 Seated. 1800 square feet.{' '}
              <br />
              <ul>
                <li>Minimuum 2 hours + 2 hours cleaning for 4 hour total</li>
                <li>Deposit required to hold booking</li>
                <li>$xxx for 4 hours - WEEKDAY</li>
                <li>$xxx for 4 hours - WEEKEND</li>
                <li>$xxx for every additional hour</li>
                <li>Add $100 for 2 hour photoshoot</li>
                <li>1 hour planning meeting included</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ textAlign: 'center' }}><Button variant="primary">Book Now</Button></p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={MM} />
          <Card.Body>
            <Card.Title>Mockingbird Market</Card.Title>
            <Card.Text>
              Capacity: 100 Theater, 50 Seated, 75-100 Cocktail. 1200 square feet.{' '}
              <br />
              <ul>
                <li>Minimuum 2 hours + 2 hours cleaning for 4 hour total</li>
                <li>Deposit required to hold booking</li>
                <li>$xxx for 4 hours - WEEKDAY</li>
                <li>$xxx for 4 hours - WEEKEND</li>
                <li>$xxx for every additional hour</li>
                <li>Add $100 for 2 hour photoshoot</li>
                <li>1 hour planning meeting included</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ textAlign: 'center' }}><Button variant="primary">Book Now</Button></p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Garden} />
          <Card.Body>
            <Card.Title>All Inclusive Package</Card.Title>
            <Card.Text>
              Pesky Rabbit, Mockingbird Market, outside Garden, &amp; 2-hour photoshoot!{' '}
              <br />
              <ul>
                <li>SATURDAY $xxx for event between 10am-10pm, set-up starts after 8am, finish clean-up by midnight.</li>
                <li>SUNDAY $xxx for event between 10am-7pm, set-up starts after 8am, finish clean-up by 7pm.</li>
                <li>Allow for at minimum 1 hour set-up and 2 hours for clean-up.</li>
                <li>1 hour planning meeting included</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ textAlign: 'center' }}><Button variant="primary">Book Now</Button></p>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )
}
