import React from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Resume from './Resume.jsx';
import ShowerThoughts from './ShowerThoughts.jsx';
import Contact from './Contact.jsx';

<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/AboutMe" component={AboutMe} />
  <Route exact path="/Resume" component={Resume} />
  <Route exact path="/ShowerThoughts" component={ShowerThoughts} />
  <Route exact path="/Contact" component={Contact} />
</Switch>

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const horizontalSliderProps = {
  name: 'horizontalSlider1', 
  infinite: true, 
};

const horizontalSlides = [
  <Slide style={{backgroundColor: '#99eeff'}}> 
    <Resume /> 
  </Slide>,
  <Slide>
    Your mother raised you well.
  </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
  <Slide style={{backgroundColor: 'black'}}>
    <Home /> 
  </Slide>,


  <Slide style={{backgroundColor: '#ffc4f5'}}>
    <AboutMe />
  </Slide>,

  <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,

  <Slide style={{backgroundColor: '#92fcde'}}>
    <ShowerThoughts />
  </Slide>,

  <Slide style={{backgroundColor: '#debcff'}}>
    <Contact />
  </Slide>
];
fullPageOptions.slides = slides;

module.exports = { 
  Fullpage,
  fullPageOptions
}