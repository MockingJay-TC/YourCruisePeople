import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Intro from './section-components/intro-v3';
import About from './section-components/about';
import Team from './section-components/team';
import Footer from './global-components/footer';

const AboutPage = () => {
    return (
      <div>
        <Navbar />
        <PageHeader
          headertitle="About Us"
          bannerImage="https://yourcruisepeople.s3.eu-west-1.amazonaws.com/Mykonos_18_5978e939ee.jpg"
        />
        <Intro />
        <About />
        {/* <Team /> */}
        <Footer />
      </div>
    );
}

export default AboutPage

