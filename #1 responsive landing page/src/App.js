
import './App.css';
import NavMenu from './navmenu';

function App() {
  return (
    <div>
      <NavMenu />
      <div className='body'>
        <section id="home" className="section">
          <h1>Welcome to Fun Land!</h1>
          <p>Explore a world full of colorful adventures, exciting games, and magical stories just for you!</p>
        </section>
        <section id="about" className="section">
          <h1>About Us</h1>
          <p>We are a team of dreamers who create fun and educational content for kids. Our mission is to make learning an exciting journey!</p>
        </section>
        <section id="games" className="section">
          <h1>Fun & Games</h1>
          <p>Dive into a world of interactive games where you can solve puzzles, go on treasure hunts, and meet friendly characters along the way.</p>
        </section>
        <section id="stories" className="section">
          <h1>Story Time</h1>
          <p>Join us for bedtime stories, fairy tales, and adventures with heroes and magical creatures from faraway lands.</p>
        </section>
        <section id="contact" className="section">
          <h1>Get in Touch</h1>
          <p>Have a question or want to share your ideas? We’d love to hear from you and create even more fun together!</p>
        </section>
      </div>
    </div>
  );
}

export default App;
