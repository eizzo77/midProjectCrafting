import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="game-container">
        <div className="craft-container">
          <div className="weapons-list">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="weapon-avatar-container"></div>
        </div>
      </div>
    </>
  );
};
