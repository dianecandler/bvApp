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
          <li>Minimuum 2 hours + 2 hours cleaning for 4 hour total</li>
          <li>Maximum 75 buffet, seating provided for 50</li>
          <li>Maximum 120 cocktail style, venue seating for 50 included, charge for removing</li>
          <li>Deposit required to hold booking</li>
          <li>Catering Kitchen available</li>
          <li>Antique Bar &amp; Street Lamps</li>
          <li>Bluetooth Sound System</li>
          <li>Concrete Floors for dancing</li>
          <li>Free WiFi Throughout</li>
          <li>Multiple restrooms</li>
          <li>Use of Refrigerators, Coolers</li>
          <li>Catering &amp; Chair Rental Available</li>
          <li>$xxx for 4 hours - WEEKDAY</li>
          <li>$xxx for 4 hours - WEEKEND</li>
          <li>$xxx for every additional hour</li>
          <li>Add $100 for 2 hour photoshoot</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p style={{textAlign: 'center'}}><Button variant="primary">Book Weekend</Button></p>
    <p style={{textAlign: 'center'}}><Button variant="primary">Book Weekday</Button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={MM} />
    <Card.Body>
      <Card.Title>Mockingbird Market</Card.Title>
      <Card.Text>
      If you are looking for elegance and charm to host your wedding, bridal shower or a cheering setting for your birthday party or baby shower, you will find Mockingbird Market offers an ideal setting.  1200 sq ft.{' '}
        <ul>
          <li>100 Theater, 50 Seated, 75-100 Cocktail</li>
          <li>Minimuum 2 hours + 2 hours cleaning for 4 hour total</li>
          <li>Deposit required to hold booking</li>
          <li>40ft. Hand Carved Display &amp; 2 store front window displays</li>
          <li>Sound System/BlueTooth &amp; Alexa Compatible</li>
          <li>Concrete Floors -dancing!</li>
          <li>Concrete Floors for dancing</li>
          <li>Free WiFi Throughout</li>
          <li>$xxx for 4 hours - WEEKEND</li>
          <li>$xxx for every additional hour</li>
          <li>Add $100 for 2 hour photoshoot</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p style={{textAlign: 'center'}}><Button variant="primary">Book Weekend</Button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Garden} />
    <Card.Body>
      <Card.Title>All Inclusive Package</Card.Title>
      <Card.Text>
      With the <strong>All Inclusive Package</strong>, you have access to the Pesky Rabbit and Mockingbird Market plus use of the Garden, located in a private area adjoining the halls. This option also includes use of the property for a photoshoot!
      <ul>
          <li>Includes us of both <strong>Pesky Rabbit</strong> and <strong>Mockingbird Market</strong>, not at the same time.</li>
          <li>Ue of the 8ft fenced private <strong>Garden</strong> which includes seating and some tables and chairs.</li>
          <li>Parking available on the dowtown street of Bartlett.</li>
          <li>Use of the alley areas for with use of the Garden.</li>
          <li>Includes use of the property for a 2 hour photoshoot</li>
          <li>Same capacity guidelines for each hall applies.</li>
          <li>SATURDAY $xxx for event anytime between 10am-10pm, set-up starts no earlier than 8am, clean-up finished by midnight.</li>
          <li>SUNDAY $xxx for event anytime between 10am-7pm, set-up starts no learlier than 8am, clean-up finished by 7pm.</li>
          <li>Allow for at minimum 1 hour set-up and 2 hours for clean-up.</li>
      </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <p style={{textAlign: 'center'}}><Button variant="primary">Book All Inclusive Saturday</Button></p>
      <p style={{textAlign: 'center'}}><Button variant="primary">Book All Inclusive Sunday</Button></p>
    </Card.Footer>
  </Card>
</CardDeck>
    )
}
