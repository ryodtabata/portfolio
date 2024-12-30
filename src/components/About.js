import React from 'react';
import profilePic from '../assets/images/headshotBCER.jpg'; 
import '../styles/About.css';

function About() {
  return (
    <div className="about-content">
      <img src={profilePic} alt="Ryo's Profile" className="profile-picture" />
      <h1 className="name">Ryo Tabata</h1>
      <p className="about-text">
      I'm a software developer focused on creating intuitive and clean applications. With expertise in both 
      back-end and front-end 
      development, as well as data analytics and machine learning.
      I love all things tech and eager to jump into the world of technology!
      </p>
    </div>
  );
}

export default About;
