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
        <p>I'm a passionate web developer dedicated to crafting responsive, 
          user-friendly websites. I specialize in React,
           JavaScript, and modern web technologies, 
          with a strong focus on clean code, performance, and intuitive UI/UX design.
           My approach blends technical precision with creative problem-solving to deliver impactful digital experiences.
           I’m always learning and evolving to stay ahead in the ever-changing world of web development.</p>
        {/* <button className="cta-button">View My Work</button> */}
      </div>
      <img src={profilePhoto} alt="profile" className="profile-photo" />
    </section>
  );
};

export default Hero;