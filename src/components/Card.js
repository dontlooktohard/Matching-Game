import React from "react";
import Footer from "./Footer.js";
import Data from "../userData/users";
import Nav from "./Nav.js";
import { useState } from "react";

const Card = () => {
  const [index, setIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [incorrect, setIncorrect] = useState(0);
  const [correct, setCorrect] = useState(0);

  function pointIndex() {
    setIndex(index + 1);
    if (index === 9) {
      setGameOver(true);
    }
  }

  function clickFalse() {
    pointIndex();
    if (!Data[index].isMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  function clickTrue() {
    pointIndex();
    if (Data[index].isMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  return (
    <div>
      {gameOver ? (
        <div>
          <h1>Game Over!</h1>
          <p>Correct: {correct}</p>
          <p>So Bad: {incorrect}</p>
          <p>Good luck next game</p>
        </div>
      ) : (
        <div className="container">
          <Nav correct={correct} incorrect={incorrect} />
          <h1>Question {index + 1}:</h1>
          <p>{Data[index].text}</p>
          <Footer clickTrue={clickTrue} clickFalse={clickFalse} />
        </div>
      )}
    </div>
  );
};

export default Card;
