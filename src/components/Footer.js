import React from 'react';

const Footer = ({ onNewGameClick, onSuggestClick }) => {
  const handleNewGameClick = () => {
    onNewGameClick(); // Call the onClickEvent function passed as a prop
  };


  
  return (
    <div className="footer">
      <button onClick={handleNewGameClick}>New Game</button>
      <button onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;