import React from 'react';
import './ScoreBoard.css';

function ScoreBoard() {
  return (
    <div className='scoreboard'>
      <div className='scoreboard__gameName'>
        <img src='/images/RockPaperScissorsText.svg' alt='RockPaperScissorsText'></img>
      </div>
      <div className='scoreboard__score'>
        <p>Score</p>
        <h1>12</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
