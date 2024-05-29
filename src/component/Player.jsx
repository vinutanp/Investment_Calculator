import React, { useState, useRef } from "react";

const Player = () => {
  const enteredName = useRef();
  const [playerName, setPlayerName] = useState("");

  

  const handleClick = () => {
    setPlayerName(enteredName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?playerName: 'unknown entity'}</h2>
      <p>
        <input type="text" ref={enteredName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
