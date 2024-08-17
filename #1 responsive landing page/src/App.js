import React from 'react';
import './App.css';
import NavMenu from './components/navmenu';

function App() {
  return (
    <div>
      <NavMenu/>
      <div className='body'>
      <section id="home" className="section">
          <h1>Innovative Software Solutions</h1>
          <p>Welcome to Innov Solutions, where innovation meets practicality. We are dedicated to transforming businesses through cutting-edge technology that drives growth, efficiency, and sustainability. Our solutions are not just about meeting the current demands of your business; they are about anticipating the future and preparing you to lead in a competitive landscape. Join us as we redefine what's possible in the world of technology and business integration.</p>
        </section>

        <section id="services" className="section">
          <h1>Our Services</h1>
          <p>At Innov Solutions, we offer a comprehensive suite of services designed to propel your business forward. Our custom software development services ensure that your unique challenges are met with tailored solutions. With our cloud solutions, your business gains the scalability and flexibility needed to grow without limitations. We also specialize in digital transformation strategies that help you leverage the latest technologies to improve processes, enhance customer experiences, and achieve operational excellence. Our team is here to support you every step of the way.</p>
        </section>

        <section id="about" className="section">
          <h1>About Us</h1>
          <p>Innov Solutions was founded on the belief that technology can be a powerful catalyst for business success. Our team comprises seasoned professionals who bring a wealth of experience in software engineering, cloud computing, and digital strategy. We are passionate about solving complex problems and delivering solutions that are not only innovative but also practical and results-driven. Our commitment to excellence is reflected in everything we do, from the initial consultation to the final deployment. We partner with our clients to understand their needs, delivering solutions that align with their vision and goals.</p>
        </section>

        <section id="portfolio" className="section">
          <h1>Our Portfolio</h1>
          <p>Over the years, Innov Solutions has built a diverse portfolio of successful projects that span various industries, including finance, healthcare, retail, and technology. Our clients trust us to deliver high-quality solutions that meet their specific needs, whether it’s developing a new software platform, migrating their infrastructure to the cloud, or implementing a comprehensive digital transformation strategy. We pride ourselves on our ability to adapt to different industries and challenges, ensuring that our solutions are always aligned with our clients' business objectives. Explore our portfolio to see the impact of our work.</p>
        </section>

        <section id="contact" className="section">
          <h1>Contact Us</h1>
          <p>Let’s start a conversation about how Innov Solutions can support your business goals with our innovative software solutions. Whether you’re looking for a custom software application, cloud strategy, or digital transformation guidance, our team is here to help. We are committed to providing personalized service and solutions that are tailored to your specific needs. Contact us today to learn more about how we can collaborate to bring your vision to life. We look forward to partnering with you on your journey to success.</p>
        </section>

      </div>
    </div>
  );
}

export default App;
