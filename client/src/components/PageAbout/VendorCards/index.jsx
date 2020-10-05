import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import Florist from './Florist.jpg';
import DJ from './DJ.jpg';
import Dance from './Dance.jpg';
import Bank from './Bank.jpg';
import Bank2 from './2Bank.jpg';
import Bank3 from './Bank3.jpg';
import Prom from './Prom.jpg';

export default function cards() {
  return (
    <div><h2 style={{paddingLeft: '2rem'}}>Explore how easy it is to shop local in Bartlett</h2>
    <CardDeck  style={{fontSize: '10px'}}>
      <Card>
        <Card.Img variant="top" src={DJ} alt="DJ" />
        <Card.Body>
          <Card.Title>Local DJ</Card.Title>
          <Card.Text>
            Lots of experience, easy to work with!{' '}
            <ul>
              <li>Lil Town Sound</li>
              <li>415 994-9251</li>
              <li>Bobby Freeman, Owner</li>
              <li></li>
              <li>Call for more information about DJ services</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Dance} alt="DJ" />
      </Card>
      <Card>
        <Card.Img variant="top" src={Florist} alt="florist" />
       
        <Card.Body>
          <Card.Title>Local Florist</Card.Title>
          <Card.Text>
            Amazing Local Florist{' '}
            <ul>
              <li>Unique Celebrations</li>
              <li>129 M Evoe Street, Bartlett, TX 76511</li>
              <li>254 527-3324</li>
              <li>Debbie Wendler, Owner</li>
              <li>Located just 1/2 block from Bartlett Venue</li>
              <li>Look for them on <strong><a href="https://www.facebook.com/Unique-Celebrations-154985771206579/" target="blank" rel="noopener noreferrer">Facebook</a></strong></li>
            </ul>
          </Card.Text>
          <Card.Img variant="bottom" src={Prom} alt="BnB" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Bank} alt="BnB" />
        <Card.Body>
        <Card.Title>Stay local</Card.Title>
            <Card.Text>
              The Bartlett National Bank Guest House{' '}
              <ul>
                <li>2 bedroom, 2 bath, sleeps 6</li>
                <li>1/2 block from Bartlett Venue</li>
                <li>Book your reservations on AirBnB or Expedia</li>
                <li>Sleep in a Historic Bank!</li>
                <li>Opened 1904, operating as a bank until the 1930's</li>
              </ul>
             </Card.Text>
        </Card.Body>
        <Card.Img style={{paddingBottom: "1rem"}} src={Bank3} alt="BnB" />
        <Card.Img variant="bottom" src={Bank2} alt="BnB" />
     </Card>
</CardDeck>
</div>
    )
}
