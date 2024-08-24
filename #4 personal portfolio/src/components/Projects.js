import React from 'react';
import './Projects.css';
import Glam from '../assests/glam.jpg';
import Car from '../assests/car.jpg';
import Gift from '../assests/gift.jpeg';
import TTT from '../assests/ttt.jpg';
import StopWatch from '../assests/stopwatch.jpg';
import Quote from '../assests/quote.jpg';
import Weather from '../assests/weather.jpg';

const Projects = () => {
  const projectList = [
    { name: 'Glam Mart Application',description: 'An e-commerce platform offering a wide range of fashion and beauty products.',link: 'https://github.com/vkaviyavarshini/Glam-Mart-Application',image: Glam,},
    { name: 'Car Rental System', description: 'A web application for booking and managing car rentals online.', link: 'https://github.com/vkaviyavarshini/Car-Rental-System',image: Car ,},
    { name: 'Customisable Gift Shop', description: 'An online shop allowing users to personalize and order unique gifts.', link: 'https://github.com/vkaviyavarshini/Advanced-Application-Development',image: Gift,},
    { name: 'Quotes Generator', description: 'A tool that generates and displays inspirational quotes.', link: 'https://github.com/vkaviyavarshini/Quotes-Generator',image: Quote,},
    { name: 'Tic-Tac-Toe Game', description: 'A web-based multiplayer version of the classic Tic Tac Toe game.', link: 'https://github.com/vkaviyavarshini/prodigy-infotech/tree/main/%233%20tic-tac-toe',image: TTT,},
    { name: 'Online Stop Watch', description: 'A simple and responsive stopwatch application for tracking time.', link: 'https://github.com/vkaviyavarshini/prodigy-infotech/tree/main/%232%20stopwatch',image: StopWatch,},
    { name: 'Weather App', description: 'A weather forecast application that provides real-time weather updates.', link: 'https://github.com/vkaviyavarshini/prodigy-infotech/tree/main/%233%20tic-tac-toe',image: Weather,},
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
