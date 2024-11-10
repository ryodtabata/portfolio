import React from 'react';
import About from './components/About';
import Start from './components/Start';
import Gameshowcase from './components/Gameshowcase';
import './styles/App.css';
import Experience from './components/Expereince';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <aside className="fixed-section">
        <Header />
        <About /> {/* Left side with "About Me" and profile picture */}
      </aside>
      <main className="scrollable-section">
        <Start /> {/* Scrollable content like Projects */}
        <Gameshowcase />
        <Experience />
      </main>
    </div>
  );
}

export default App;
