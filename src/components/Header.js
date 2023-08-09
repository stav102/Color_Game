import React from 'react'

import { 
  GAME_STATE_PLAYNING, 
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";

const header = ({gameState, currentPlayer, winPlayer}) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYNING: 
        return <div>player {currentPlayer } Turn</div>
      case GAME_STATE_WIN: 
        return <div>Player {winPlayer} wins</div>
      case GAME_STATE_DRAW: 
        return <div>Game is a Draw!</div>
      default:
  }
}

  return (
    <div className="panel header">
        <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default header;