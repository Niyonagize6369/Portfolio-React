import React from 'react';
import personalInfo from "../data/personalInfo.json";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <p>{personalInfo.tagline}</p>
        <button className="cta-button">View My Work</button>
      </div>
      <img src={personalInfo.photo} alt="Profile" className="profile-img" />
    </section>
  );
};

export default Hero;