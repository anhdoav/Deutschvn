import React, { useState } from "react";
import "./RewriteTest.module.css";

const RewriteTest = ({ sentences }) => {
  const [answers, setAnswers] = useState(sentences.map(() => ""));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer.trim() === sentences[index].correct.trim()) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    setShowCorrectAnswers(false); // Ẩn đáp án đúng khi kiểm tra
  };

  const resetAnswers = () => {
    setAnswers(sentences.map(() => ""));
    setScore(0);
    setShowResults(false);
    setShowCorrectAnswers(false);
  };

  const revealCorrectAnswers = () => {
    setShowCorrectAnswers(true); // Hiển thị đáp án đúng
  };

  return (
    <div className="rewrite-test">
      {/* Thanh tính điểm */}
      <div className="score-bar">
        <div
          className="progress"
          style={{ width: `${(score / sentences.length) * 100}%` }}
        ></div>
        <span className="progress-text">
          {score}/{sentences.length}
        </span>
      </div>

      {/* Tiêu đề */}
      <h2 className="test-title">Bài tập viết lại câu</h2>

      {/* Bảng bài tập */}
      <table className="rewrite-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Câu</th>
            <th>Viết lại</th>
          </tr>
        </thead>
        <tbody>
          {sentences.map((sentence, index) => (
            <tr key={index}>
              {/* Cột 1: STT */}
              <td>{index + 1}</td>

              {/* Cột 2: Câu gợi ý */}
              <td>{sentence.hint}</td>

              {/* Cột 3: Ô nhập liệu */}
              <td>
                <textarea
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className={`answer-input ${
                    showResults && answers[index] !== sentence.correct
                      ? "incorrect"
                      : ""
                  }`}
                />
                {showCorrectAnswers && answers[index] !== sentence.correct && (
                  <p className="correct-answer">Đáp án đúng: {sentence.correct}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Nút điều khiển */}
      <div className="controls">
        <button onClick={checkAnswers} className="btn-check">
          Kiểm tra
        </button>
        <button onClick={revealCorrectAnswers} className="btn-show">
          Xem đáp án
        </button>
        <button onClick={resetAnswers} className="btn-reset">
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default RewriteTest;