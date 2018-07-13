import React from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Home from './Home.jsx';
import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Resume from './Resume.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';

const HeaderStyle = {
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  cursor: 'pointer',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  top: '0px'
};

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
    <Blog />
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