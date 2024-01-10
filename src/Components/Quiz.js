// components/Quiz.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import questions from "../questions";
import "../styles.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
