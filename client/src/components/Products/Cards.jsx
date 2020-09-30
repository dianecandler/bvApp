import React from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
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
      Capacity of 120 for cocktails or 75 for seated buffet gatheringss.  Socialize around the antique bar or one of the vintage Jim Beam Whiskey Barrels.  1800 Sq.Ft.{' '}
        <ul>
          <li>Seats 50, Room Seats 75</li>
          <li>Antique Bar & Street Lamps</li>
          <li>Bluetooth Sound System</li>
          <li>Concrete Floors - dancing?</li>
          <li>Some display/serving items</li>
          <li>Free WiFi Throughout</li>
          <li>Use of Catering Kitchen</li>
          <li>Use of Refrigerators, Coolers</li>
          <li>Catering & Chair Rental Available</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p style={{textAlign: 'center'}}><Button variant="primary">Book Event</Button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={MM} />
    <Card.Body>
      <Card.Title>Mockingbird Market</Card.Title>
      <Card.Text>
      Looking for elegance and charm?  Host your wedding, bridal shower? Find this cheery setting ideal for your birthday party or baby shower.  Find Mockingbird Market ideal for even the most girlie-girl event.  1200 sq ft.{' '}
        <ul>
          <li>100 Theater, 50 Seated</li>
          <li>40ft. Hand Carved Display & 2 store front window displays</li>
          <li>Sound System/Bluetooth & Alexa Compatible</li>
          <li>Concrete Floors - dancing?</li>
          <li>Free WiFi Throughout</li>
          <li>Catering & Chair Rental Available</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p style={{textAlign: 'center'}}><Button variant="primary">Book Event</Button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Garden} />
    <Card.Body>
      <Card.Title>The Garden</Card.Title>
      <Card.Text>
   Our <stonrg>All Inclusive Package</stonrg> offers access to the Pesky Rabbit and Mockingbird Market  plus use of the Garden, located in a private area adjoining the venue halls. This option also includes use of the property for a 2 hour photoshoot &amp; 1 hour meeting time which can be used for planning or rehearsal!
      <ul>
          <li>Only with All Inclusive Package</li>
          <li>Quiet, shaded, ceiling fans</li>
          <li>Adirondack chairs &amp; assorted patio furniture</li>
          <li>Small Alexa/Sound System</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      <p style={{textAlign: 'center'}}><Button variant="primary">Book Event</Button></p>
    </Card.Footer>
  </Card>
</CardDeck>
    )
}
