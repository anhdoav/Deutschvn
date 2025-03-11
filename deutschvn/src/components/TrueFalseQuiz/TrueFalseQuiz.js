import React, { useState } from "react";
import styles from "./TrueFalseQuiz.module.css";

const TrueFalseQuiz = ({ questions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const resetQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowAnswers(false);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Eating out</h2>
      <p className="quiz-subtitle">Are the sentences true or false?</p>

      <div className="quiz-content">
        {questions.map((q, index) => (
          <div key={index} className="quiz-question">
            <span className="question-text">{index + 1}. {q.text}</span>
            <div className="options">
              <label className={`radio-label ${showAnswers && q.answer === true ? 'correct' : ''} ${showAnswers && answers[index] !== q.answer ? 'incorrect' : ''}`}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="true"
                  checked={answers[index] === true}
                  onChange={() => handleAnswer(index, true)}
                />
                True {showAnswers && (q.answer === true ? "✔" : "✖")}
              </label>
              <label className={`radio-label ${showAnswers && q.answer === false ? 'correct' : ''} ${showAnswers && answers[index] !== q.answer ? 'incorrect' : ''}`}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="false"
                  checked={answers[index] === false}
                  onChange={() => handleAnswer(index, false)}
                />
                False {showAnswers && (q.answer === false ? "✔" : "✖")}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="quiz-buttons">
        <button className="btn-show" onClick={toggleShowAnswers}>
          {showAnswers ? "Hide answers" : "Show answers"}
        </button>
        <button className="btn-retry" onClick={resetQuiz}>Try again</button>
      </div>
    </div>
  );
};

export default TrueFalseQuiz;