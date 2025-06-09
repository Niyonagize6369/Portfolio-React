import React from 'react';
import personalInfo from "../data/personalInfo.json";
import "../styles/Hero.css";
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{personalInfo.name}</h1>
        <h2> {personalInfo.about}</h2>
        <p>{personalInfo.info}</p>
      </div>
      <img src={profilePhoto} alt="profile" className="profile-photo" />
    </section>
  );
};

export default Hero;