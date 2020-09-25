import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import Garden from './garden.jpg';
import MM from './mb.jpg';
import PR from './pr.jpg';

export default function cards() {
    return (
<CardDeck>
  <Card>
    <Card.Img variant="top" src={PR} />
    <Card.Body>
      <Card.Title>Pesky Rabbit</Card.Title>
      <Card.Text>
      Capacity of 120 for cocktails or 75 for seated buffet gatherings.  Garther around the antique bar or one of the vintage Jim Beam Whiskey Barrels.  1800 Sq.Ft.{' '}
        <ul>
          <li>Seats 50, Room Seats 75</li>
          <li>Antique Bar & Street Lamps</li>
          <li>Bluetooth Sound System</li>
          <li>Concrete Floors -dancing!</li>
          <li>Free WiFi Throughout</li>
          <li>Use of Catering Kitchen</li>
          <li>Use of Refrigerators, Coolers</li>
          <li>Catering & Chair Rental Available</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={MM} />
    <Card.Body>
      <Card.Title>Mockingbird Market</Card.Title>
      <Card.Text>
      If you are looking for elegance and charm to host your wedding, bridal shower or a cheering setting for your birthday party or baby shower, you will find Mockingbird Market offers an ideal setting.  1200 sq ft.{' '}
        <ul>
          <li>100 Theater, 50 Seated</li>
          <li>40ft. Hand Carved Display & 2 store front window displays</li>
          <li>Sound System/BlueTooth & Alexa Compatible</li>
          <li>Concrete Floors -dancing!</li>
          <li>Free WiFi Throughout</li>
          <li>Catering & Chair Rental Available</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Garden} />
    <Card.Body>
      <Card.Title>The Garden quickly</Card.Title>
      <Card.Text>
      With the All Inclusive Package, you have access to the Pesky Rabbit and Mockingbird Market  plus use of the Garden, located in a private area adjoining the halls. This option also includes use of the property for a photoshoot!
      <ul>
          <li>Available with the All Inclusive Package</li>
          <li>Quiet, shaded, ceiling fans</li>
          <li>Adirondack chairs and patio furniture</li>
          <li>Sound System/Bluetooth and Alexa Compatible</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      
    </Card.Footer>
  </Card>
</CardDeck>
    )
}
