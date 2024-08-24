import './App.css';
import Weather from './components/Weather';
import bg from './assets/bg.jpg';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${bg})` }}>
    <div className="App-card">
      <h1 className='hh'>Weather App</h1>
      <Weather />
    </div>
    </div>
  );
}

export default App;
