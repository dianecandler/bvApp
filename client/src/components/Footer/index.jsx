
import React from 'react';
import Terms from './terms.pdf';
import FAQ from './faq.pdf';
import Pic from './diane.jpg';

export default function index() {
  return (
    <footer className="section $light-gray bg-light">
      <div className="container">

        {/* <!-- Lines -->
        <div className="lines">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4"></div>
              <div className="col-md-6 hidden-sm col-lg-4"></div>
              <div className="col-md-6 col-lg-4 hidden-md"></div>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-6 col-lg-4  pl-0 pr-md-30px">
            <a className="brand" href="#">Diane Candler</a>
            <p className="size-sm">Product Designer &amp; Full-stack Developer</p>
            <p className="mt-4">
              <strong className="text-uppercase text-dark">Address:</strong><br />
                P.O. Box 9, Bartlett, TX, USA
              </p>
            <p className="mt-4">
              <strong className="text-uppercase text-dark">Email:</strong><br />
                <a href="mailto://dianedcandler@gmail.com">dianedcandler@gmail.com</a>
              </p>
          </div>
          <div className="col-md-6 col-lg-4  order-md-3  order-lg-2 pl-0 pr-md-30px mt-5 mt-md-0">
            <strong className="text-uppercase text-dark">Menu:</strong><br />
            <ul className="navbar-nav mt-4 menu">
              <li><a className="nav-link" href="#home">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#specialization">Specialization</a></li>
              <li><a className="nav-link" href="#works">Projects</a></li>
              <li><a className="nav-link" href="#experience">Experience</a></li>
              <li><a className="nav-link" href="#testimonial">Testimonials</a></li>
              <li><a className="nav-link" href="#skills">Skills &amp; Education</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 order-md-2  order-lg-3  mt-5 mt-lg-0 px-0">
            <strong className="text-uppercase text-dark">My Bio</strong><br />
            <p className="mt-4">
              Raised in a family of well educated, high achievers, Diane instinctly developed a passion for learning. She began her career in product management and marketing before starting her own creative services business.  Today she desires to join a company that values her experience and newly acquired full-stack coding skills.
             </p>
            <div className="mt-4">
              <img src="/img/Diane_Square.jpg" alt="Diane Candler" height="200" style={{ borderRadius: "50%" }} />
            </div>
          </div>
        </div> */}

        <section className="section-sm pb-0">
        <div className="col-md-6 col-lg-4 pl-0 pr-md-30px mt-5 mt-md-0">
              {/* <!-- Link to FAQ --> */}
              <ul className=" d-none d-sm-block">
              <li><a href= {FAQ} target="_blank">FAQs</a></li>
              <li><a href= {FAQ} target="_blank">FAQs</a></li>
                {/* <li><a href="https://github.com/dianecandler" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li> */}
                {/* <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li> */}
                {/* <li><a href="https://www.linkedin.com/in/diane-candler-centraltexas/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href= {Resume} target="_blank"><ion-icon name="document"></ion-icon></a></li> */}
              </ul>
            </div>
          <div className="row mx-0">
            <div className="col-md-9 col-lg-6 pl-0 pr-md-30px">
            <img src={Pic} style={{width:'10vw'}} />
              <p className="mb-0"> © Diane Candler  -  2020 All Rights Resevered</p>
            </div>
            
            <div className="col-md-6 col-lg-4 pl-0 mt-5 mt-lg-0">
              {/* <!-- Language --> */}
              {/* <ul className="language">
                   <li className="active"><a href="#">Eng</a></li>
                   <li><a href="#">Fra</a></li>
                   <li><a href="#">Ger</a></li>
                </ul> */}
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
