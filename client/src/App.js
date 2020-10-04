import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageHome from './components/PageHome';
import PageAbout from './components/PageAbout';
import PageCalendar from './components/PageCalendar';
import PagePhotoshoot from './components/PagePhotoshoot';
import PageVenue from './components/PageVenue';
import PageContact from './components/PageContact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" ><PageHome /></Route>
          <Route exact path="/venue-rental" ><PageVenue /></Route>
          <Route exact path="/calendar" ><PageCalendar /></Route>
          <Route exact path="/photoshoot" ><PagePhotoshoot /></Route>
          <Route exact path="/about-us" ><PageAbout /></Route>
          <Route exact path="/inquire" ><PageContact /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
