import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience">
    <div className="resume-section">
      
      <a
        href="https://drive.google.com/file/d/1CPkpF3hpYIO-ihdv7CGuR1GJ8BTGcg5a/view?usp=sharing" /* Replace with your actual resume link */
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View My Resume
      </a>
    </div>
      <h1>My Experience...</h1>

      <div className="experience-entry">
        <h3>2023-2024</h3>
        <h4>Reservoir Engineer Technician (Data Analyst) CO-OP</h4>
        <p><strong>BC Energy Regulator, Victoria BC</strong></p>
        <ul>
          <li>Specialized in data analytics of reservoir fluids.</li>
          <li>Developed and maintained spreadsheets in Excel, with automation using VBA.</li>
          <li>Conducted data entry and cleaning to ensure accuracy and completeness.</li>
          <li>Organized datasets for comprehensive analysis.</li>
          <li>Generated detailed reports and visualizations using Power BI.</li>
          <li>Utilized GIS software for spatial data analysis and mapping.</li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>2023</h3>
        <h4>University Courses</h4>
        <p>Continuing education in computer science, focusing on software development and data analysis.</p>
      </div>

      <div className="experience-entry">
        <h3>2022</h3>
        <h4>Construction Crew Lead</h4>
        <p><strong>GnG Interiors, Victoria BC</strong></p>
        <ul>
          <li>Led a small group of laborers at the University of Victoria.</li>
          <li>Focused on steel stud work and interior finishing.</li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>2021</h3>
        <h4>Warehouse Inventory Manager</h4>
        <p><strong>Medline, Edmonton AB</strong></p>
        <ul>
          <li>Worked as a warehouse shipper and receiver of medical supplies.</li>
          <li>Promoted to inventory manager, ensuring accurate counts and updating all inventory numbers in the database systems.</li>
        </ul>
        <h4>Skills learned:</h4>
        <ul className="skills">
          <li>Teamwork</li>
          <li>Meeting deadlines</li>
          <li>Managing large data sets</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
