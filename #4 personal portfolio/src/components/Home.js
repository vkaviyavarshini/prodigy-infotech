import React from 'react';
import './Home.css';
import profilePhoto from '../assests/profile.jpeg'

const Home = () => {
  return (
    <div className="home">
      <img src={profilePhoto} alt="Kaviyavarshini V" className="profile-photo" />
      <h1>Hi, I'm Kaviyavarshini V</h1>
      <p className='pp'>Software Development Engineer | Web Developer | React Enthusiast | UI/UX Designer</p>
    </div>
  );
};

export default Home;
