// components/Result.js
import React from "react";
import "../styles.css";

const Result = ({ score }) => {
  return (
    <div>
      <h2>Your Final Score: {score}</h2>
    </div>
  );
};

export default Result;
