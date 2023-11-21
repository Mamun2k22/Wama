import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Statistic from './Statistic';
import Tips from './Tips';
import About from './About';
import HomeHero from './HomeHero';
import Projects from './Projects';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
           <Navigation />
           <HomeHero />
           <About />
           <Tips />
           <Projects />
           <Statistic />
           <Testimonial />
           <Contact  />
           <Footer  />
        </div>
    );
};

export default Home;