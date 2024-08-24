import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js'];
  const certifications = [
    'AWS Cloud Foundation',
    'CISCO - CyberSecurity',
    'INFOSYS - Ethical Hacking',
    'INFOSYS - Serverless Computing',
    'AI 900 - Microsoft Azure AI Fundamendals',
    'Internet of Things',
    'NPTEL - DBMS',
    'NPTEL -  Design Thinking',
    'CCNA: Enterprise Networking, , Security, and Automation',
  ];

  return (
    <div className="skills">
      <h2>Skills & Certifications</h2>
      <br/><br/>
      <div className="skills-section">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <br/>
      
      <div className="certifications-section">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
