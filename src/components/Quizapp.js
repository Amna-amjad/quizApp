import React from "react";
import { useState } from "react";


function Quizapp() {
  const [currentQuestions, setCurrentQuestions] = useState(5);
  const [score, setScore] = useState(0);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const questions = [
    {
      question: "Html Stands For _______________________",
      options: [
        { id: 0, text: "Hyper Text Makeup Language", isCorrect: false },
        { id: 1, text: "html", isCorrect: false },
        { id: 2, text: "Case Cading Style Sheet", isCorrect: false },
        { id: 3, text: "Hypertext markup language", isCorrect: true },
      ],
    },
    {
      question: "Css Stands For _______________________",
      options: [
        { id: 0, text: "Casecading Style Sheet", isCorrect: true },
        { id: 1, text: "Java", isCorrect: false },
        { id: 2, text: "Ram", isCorrect: false },
        { id: 3, text: "Hypertext markup language", isCorrect: false },
      ],
    },

    {
      question: "Js Stands For _______________________",
      options: [
        { id: 0, text: "Java Style", isCorrect: false },
        { id: 1, text: "Java Script", isCorrect: true },
        { id: 2, text: "Script", isCorrect: false },
        { id: 3, text: "Script Src", isCorrect: false },
      ],
    },
    {
      question: "Dom Stands For _______________________",
      options: [
        { id: 0, text: "Document Object Model", isCorrect: true },
        { id: 1, text: "html", isCorrect: false },
        { id: 2, text: "Css", isCorrect: false },
        { id: 3, text: "Java", isCorrect: false },
      ],
    },
    {
      question: "Ram Stands For _______________________",
      options: [
        { id: 0, text: "Read Only Memory", isCorrect: false },
        { id: 1, text: "Dom", isCorrect: false },
        { id: 2, text: "Random Acccess Memory", isCorrect: true },
        { id: 3, text: "For Pc", isCorrect: false },
      ],
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        { id: 0, text: "Hyper Text Markup Language", isFinite: false },
        { id: 1, text: "html", isFinite: false },
        { id: 2, text: "HTml", isCorrect: false },
        { id: 3, text: "Read Only Memory", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } 
    
    if (currentQuestions + 1 < questions.length){
        setCurrentQuestions(currentQuestions + 1);
    }else {
      setShowFinalResult(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestions(0);
    setShowFinalResult(false);
  };

  function timer(){
    setShowFinalResult(true)
  }
  return (
    <div className="App">
      <h1>Mcqs</h1>

      

      {showFinalResult ? (
        <div className="final-reults">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartQuiz()}> Restart Quiz </button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestions + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestions].question}</h3>
          <ul>
            {questions[currentQuestions].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
        
      )}
    

    </div>
  );
}

export default Quizapp;
