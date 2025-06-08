import React from 'react';
import personalInfo from "../data/personalInfo.json";
import "../styles/Hero.css";
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Rachel Niyonagize</h1>
        <h2> I'm Web Developer</h2>
        {/* <p>i like to do coding</p> */}
        {/* <button className="cta-button">View My Work</button> */}
      </div>
      <img src={profilePhoto} alt="profile" className="profile-photo" />
    </section>
  );
};

export default Hero;