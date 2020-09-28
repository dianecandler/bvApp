import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './Map.jpg';

export default function index() {
    return (
        <Container fluid style={{marginTop:'2rem', marginBottom:'2rem'}}>
            <Row>
                <Col m="6">
                    <a href="https://www.google.com/maps/place/117+E+Clark+St,+Bartlett,+TX+76511/@30.7758716,-97.6572571,10.33z/data=!4m5!3m4!1s0x864518a2d41060e5:0xb2bb994eb9d3cd0c!8m2!3d30.7950734!4d-97.4277976" target="_blank" rel="noopener noreferrer"><img src={Map} alt="map of Bartlett area" style={{width:'55%', marginLeft: '40%'}} /></a>
                </Col>
                <Col m="6" style={{color: 'black'}}>
                    <h4>Bartlett is minutes from . . .</h4>
                    <br />
                    <ul>
                        {/* <li><a href="https://dales-essenhaus.com/index.php>Dale's Essenhaus</a></li>
                        // <li><a href="https://walburgrestaurant.net/"> Walburg German Restaurant &amp; Biergarten </a></li> */}
                    {/* // </Col>"
                    //     <li> north of Georgetown and south of Temple, just east of I-35</li>
                    //     {/* <li> <a href="https://dales-essenhaus.com/index.php" target="_blank" rel="noopener noreferrer"/> Dales's Essenhaus &amp; Walburg Merchantile in Walburg</a></li> */}
                    <li><strong><a href="https://dales-essenhaus.com/">Dale's Essenhaus</a></strong> in Walburg</li>
                    <li><strong><a href="https://walburgrestaurant.net/">Walburg German Restaurant &amp; Biergarten</a></strong> in Walburg</li>
                    <li><strong><a href="https://www.txolive.com/">Central Texas Olive Ranch</a></strong> outside Walburg</li>
                    <li> <strong><a href="https://www.facebook.com/cottoncountryclub/">Cotton Country Club</a></strong> Dancehall in Granger on Hwy 95</li>
                    <li><strong><a href="https://www.dancingbeewinery.com/">Dancing Bee</a></strong> - the winery at <strong><a href="https://www.walkerhoneyfarm.com/">Walker Honey Farm</a></strong> in Rogers on Hwy 190 </li>
                    <li><strong><a href="https://www.sweeteats.com/">Sweet Eats Fruit Farm</a></strong> on Hwy 29 in Georgetown</li>
                    <li><strong><a href="https://barrowbrewing.com/">Barrow Brewing Company</a></strong> and <strong><a href="https://www.stagecoachsalado.com/">Stagecoach Inn</a></strong> &amp; restaurant in Salado</li>
                    <li><strong><a href="bartletttxchamber.org">Bartlett Area Chamber of Commerce</a></strong> offers a Calendar of Events</li>
                    <li><strong><a href="https://www.tripadvisor.com/Attraction_Review-g56604-d10145562-Reviews-Fletchers_Books_Antiques-Salado_Texas.html">Fletchers Books &amp; Antiques</a></strong> is worth a stop if you are in Salado.</li>
                    <li>Great Kayaking &amp; fishing at <strong><a href="https://www.recreation.gov/camping/campgrounds/232745">Wills Creek Park></a></strong> on Lake Granger</li>
                    <li>If golf is more your style, try <strong><a href="https://www.wilco.org/Departments/Parks-Recreation/County-Parks/Berry-Springs-Park"> Berry Springs Park and Preserve</a></strong></li>
                    <li><strong><a href="https://verandabloom.com/">Veranda Bloom</a></strong>, unique Home Decor and worth a trip to Rogers! </li>
                    </ul>
                    <h6>Historic area nestled between commercial farms and cattle ranches. Feel the stress fall away as you drive off the interstate and into Bartlett!</h6>
                    <li> Click on map on the left for Google map, directions.</li>
                </Col> */}
            </Row>
        </Container>
    )
}
