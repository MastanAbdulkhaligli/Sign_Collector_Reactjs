import React, { useState, useEffect } from "react";
import { ins } from "./Data.js";
import "./Game.css";
import { random } from "./RandomGen.js";

import circle from "./Images/circle.png";
import square from "./Images/square.png";
import triangle from "./Images/triangle.png";
import x from "./Images/x.png";

const Game = () => {
  // Destucting object
  const {
    match: match_num,
    triangle: triangle_num,
    square: square_num,
    x: x_num,
    circle: circle_num,
  } = random;

  // State for ShowMore
  const [showMore, setShowMore] = useState(false);

  // States show scores
  const [win, setWin] = useState(0);
  const [lost, setLost] = useState(0);

  // States for sum score
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (sum === match_num) {
      setWin(win + 1);
      setSum(0);
    }

    if (sum > match_num) {
      setLost(lost + 1);
      setSum(0);
    }
  });

  return (
    <>
      <div className="game">
        <h1 className="ins">{showMore ? ins : `Instructions:`}</h1>
        <button className="button-3" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Hide Instructions" : "Show Instructions"}
        </button>
        <div className="table">
          <div className="match">
            <h3>Match this number:</h3>
            <h1>{match_num}</h1>
          </div>
          <div className="score">
            <h3>Total Score:</h3>
            <h1>Wins: {win}</h1>
            <h1>Losses: {lost}</h1>
          </div>
        </div>
        <h1>Sum : {sum}</h1>
        <div className="imgs">
          <img
            src={circle}
            onClick={() => {
              setSum(sum + circle_num);
            }}
          />
          <img
            src={x}
            onClick={() => {
              setSum(sum + x_num);
            }}
          />
          <img
            src={square}
            onClick={() => {
              setSum(sum + square_num);
            }}
          />
          <img
            src={triangle}
            onClick={() => {
              setSum(sum + triangle_num);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
