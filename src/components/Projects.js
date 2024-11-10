import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Name</h3>
        <p>Brief description of the project.</p>
        <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      
    </section>
  );
}

export default Projects;
