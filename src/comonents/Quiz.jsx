import React, { useState } from 'react';

const Quiz = (props) => {
const quizData = props.data;
const [currentQuiz, setCurrentQuiz] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState('');

const handleAnswerSubmit = () => {
  const currentQuestion = quizData[currentQuiz];
  if (selectedAnswer === currentQuestion.correct) {
    setScore((prevScore) => prevScore + 1);
  }

  if (currentQuiz + 1 < quizData.length) {
    setCurrentQuiz((prevQuiz) => prevQuiz + 1);
  } else {
    // Quiz completed
    setCurrentQuiz(null);
  }

  setSelectedAnswer('');
};

const handleAnswerChange = (e) => {
  setSelectedAnswer(e.target.value);
};

return (
  <div className="quiz-container">
    {currentQuiz !== null ? (
      <div className="quiz-header">
        <h2 id="question">{quizData[currentQuiz]?.question}</h2>
        <ul>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer"
              value="a"
              checked={selectedAnswer === 'a'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="a" id="a_text">
              {quizData[currentQuiz]?.a}
            </label>
          </li>
          <li>
             <input
              type="radio"
              name="answer"
              id="b"
              className="answer"
              value="b"
              checked={selectedAnswer === 'b'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="b" id="b_text">
              {quizData[currentQuiz]?.b}
          </label>
          </li>

           <li>
             <input
              type="radio"
              name="answer"
              id="c"
              className="answer"
              value="c"
              checked={selectedAnswer === 'c'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="c" id="c_text">
              {quizData[currentQuiz]?.c}
            </label>
          </li>

       <li>
            <input
              type="radio"
              name="answer"
              id="d"
              className="answer"
              value="d"
              checked={selectedAnswer === 'd'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="d" id="d_text">
              {quizData[currentQuiz]?.d}
            </label>
          </li>
        </ul>
        <button id="submit" onClick={handleAnswerSubmit}>
          Submit
        </button>
      </div>
    ) : (
      <div>
        <h2>You answered {score}/{quizData.length} questions correctly</h2>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    )}
  </div>
);
};

export default Quiz;