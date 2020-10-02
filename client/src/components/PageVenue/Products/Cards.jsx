import React from 'react';
import { CardDeck, Card, Button, ListGroup} from 'react-bootstrap';
import Garden from './garden.jpg';
import MM from './mb.jpg';
import PR from './pr.jpg';

export default function cards() {
  return (
  <div>
    <CardDeck>
      <Card >
        <Card.Title><h3>Pesky Rabbit</h3></Card.Title>
        <Card.Img variant="top" src={PR} />
        <Card.Body>
        <Card.Title>Capacity 1800 square feet</Card.Title>
            <Card.Text>Socialize around the antique bar or one of the vintage Jim Beam Whiskey Barrels.</Card.Text>
          <ListGroup>
            <ListGroup.Item>Seats 50, Room Seats 75</ListGroup.Item>
            <ListGroup.Item>Cocktail style - 120</ListGroup.Item>
            <ListGroup.Item>Ideal for hosting business, family, holiday parties, wedding receptions, and more.</ListGroup.Item>
            <ListGroup.Item>14 ft antique bar &amp; service area</ListGroup.Item>
            <ListGroup.Item>Use of Catering Kitchen</ListGroup.Item>
            <ListGroup.Item>Use of Refrigerators, Coolers, display and service items</ListGroup.Item>
            <ListGroup.Item>Concrete floors, chandeliers, Full Bluetooth Sound System </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <p style={{ textAlign: 'center' }}><Button variant="primary">Check Availability</Button></p>
        </Card.Footer>
      </Card>
   <Card>

          <Card.Title><h3>Mockingbird Market</h3></Card.Title>
        <Card.Img variant="top" src={MM} />
        <Card.Body>
        <Card.Title>Capacity 1200 square feet</Card.Title>
        <Card.Text>Historic Charm and elegance with lots of light...expansive brick walls</Card.Text>
        <ListGroup>
            <ListGroup.Item>Room seats 50</ListGroup.Item>
            <ListGroup.Item>Cocktail style - 75</ListGroup.Item>
            <ListGroup.Item>Ideal for hosting wedding your ceremony, shower or more intimate celebrations.</ListGroup.Item>
            <ListGroup.Item>40 ft Hard-Carved Cabinet for Displays</ListGroup.Item>
            <ListGroup.Item>2 storefront Display Windows</ListGroup.Item>
            <ListGroup.Item>Alexa/Bluetooth Compatible Sound Solution</ListGroup.Item>
            <ListGroup.Item>Polished Concrete Floors - ideal for dancing</ListGroup.Item>
          </ListGroup>        
          </Card.Body>
        <Card.Footer>
          <p style={{ textAlign: 'center' }}><Button variant="primary">Check Availability</Button></p>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Title><h3>Garden</h3></Card.Title>
        <Card.Img variant="top" src={Garden} />
        <Card.Body>
          <Card.Title>All Inclusive Package Only</Card.Title>
          <Card.Text> Includes Pesky Rabbit &amp; Mockingbird Market plus the Garden and Photoshoot.</Card.Text>
          <ListGroup>
            <ListGroup.Item>Rooms seats 125</ListGroup.Item>
            <ListGroup.Item>Cocktails style - 200</ListGroup.Item>
            <ListGroup.Item>Ideal for hosting work events, wedding &amp; reception, birthday or graduation parties!</ListGroup.Item>
            <ListGroup.Item>Includes 2-hr photoshoot</ListGroup.Item>
            <ListGroup.Item>Fully enclosed tall privacy fence</ListGroup.Item>
            <ListGroup.Item>Ceiling Fans for Porch Seating, Shaded for Open Areas</ListGroup.Item>
            <ListGroup.Item>Adirondack chairs, Patio Furniture included</ListGroup.Item>
          </ListGroup>

        </Card.Body>
        <Card.Footer>
          <p style={{ textAlign: 'center' }}><Button variant="primary">Check Availability</Button></p>
        </Card.Footer>
      </Card>
      <Card.Text>
      <br /><br /><br />
        <h4><strong>Logistics:</strong> 50% deposit holds booking, Add hours if addtl Set-up &amp; Cleaning time is needed.  </h4>
        <br />
        <h4><strong>Provided:</strong>  Wifi Throughout, ample parking on downtown brick streets, easy access, original 20ft ship lath ceilings, original brick and plaster walls, ample street lighted parking in front of the buildings, use of alley for All Inclusive bookings</h4>
        <br />
        <h4><strong>Price Includes:</strong>  Pre-event 1 planning hour</h4>
        <br />
        <h4><strong>Catering/Chairs:</strong>  Discuss catering options, $6/chair rental available</h4>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Card.Text>
    </CardDeck>
    </div>
  )
}
