import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar.js'
import HomeCarousel from './components/Carousel/Carousel.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
        <HomeCarousel />
      
    </div>
  );
}

export default App;
