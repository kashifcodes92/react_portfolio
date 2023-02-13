import React from 'react';
import Common from './Common';
import web  from "../src/images/img3.jpg";

const About = () => {
  return (
    <>
        <Common 
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        />
    </>
  )
}
export default About;