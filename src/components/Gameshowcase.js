import React from 'react';
import gameGif from '../assets/images/game.gif'; // Place the GIF in the assets folder or adjust the path
import '../styles/Gameshowcase.css';


function GameShowcase() {
  return (
    <div className="game-showcase">
      <img src={gameGif} alt="Gameplay of my Pygame project" className="game-gif" />
      <a href="https://github.com/ryodtabata/ChessEngine" target="_blank" rel="noopener noreferrer">
        <button className="download-button">Play Me</button>
      </a>
    </div>
  );
}

export default GameShowcase;
