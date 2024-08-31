// App.js
import React from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee'; // Import the Marquee component
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Marquee /> {/* Add Marquee below the Header */}
      <Hero />
      <About/>
      <Services/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
