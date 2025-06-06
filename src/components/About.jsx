import React from 'react';
import personalInfo from "../data/personalInfo.json";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <h3>Who I Am</h3>
          <p>{personalInfo.about}</p>
          
          <h3>My Interests</h3>
          <ul className="interests-list">
            {personalInfo?.interests?.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-container">
            {personalInfo.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;