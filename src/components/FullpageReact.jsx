import React from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Resume from './Resume.jsx';
import ShowerThoughts from './ShowerThoughts.jsx';
import Contact from './Contact.jsx';
import Header from './Header.jsx';
import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react';
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

const fullPageOptions = {
  scrollSensitivity: 2,
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,
  activeSlide: 0
};

const horizontalNavStyle = {
  position: 'absolute',
  width: '100%',
  top: '50%',
  zIndex: 10
};

const horizontalSliderProps = {
  name: 'horizontalSlider1',
  infinite: true
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };

    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById('horizontal-nav');
    }

    if (name === 'horizontalSlider1') {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === 'horizontalSlider1') {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  componentDidMount() {

  }

  render() {
    const { active } = this.state;

    const currentActive = active.Fullpage;

    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
    const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

    const horizontalNav = (
      <div id='horizontal-nav' style={horizontalNavStyle}>
        <span onClick={prevHorizontalSlide}><button>PREV</button></span>
        <span style={{position: 'absolute', right: '0px'}} onClick={nextHorizontalSlide}><button>Next</button></span>
      </div>
    );

    const horizontalSlides = [
      <Slide style={{backgroundColor: '#99eeff'}}> 
        <Resume /> 
      </Slide>,
      <Slide>
        Your mother raised you well.
      </Slide>
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const verticalSlides = [
      <Slide style={{backgroundColor: 'black'}}>
        <Home /> 
      </Slide>,
    
    
      <Slide style={{backgroundColor: '#ffc4f5'}}>
        <AboutMe />
      </Slide>,
    
      <HorizontalSlider id='horizontal-slider-1' {...horizontalSliderProps}>{horizontalNav}</HorizontalSlider>,
    
      <Slide style={{backgroundColor: '#92fcde'}}>
        <ShowerThoughts />
      </Slide>,
    
      <Slide style={{backgroundColor: '#debcff'}}>
        <Contact />
      </Slide>
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
        <Header changeFullpageSlide={changeFullpageSlide.bind(this)} />
      </Fullpage>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = 'absolute';
}

export default FullpageReact;