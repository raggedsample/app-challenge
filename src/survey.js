import React, { useEffect, useState } from "react";
import { QuestionList } from "./question.js";

export const Survey = () => {
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  useEffect(() => {
    if (Object.values(answers).length == 0) {
      setTotalScore(0);
    } else {
      const sumValue = Object.values(answers).reduce((a, b) => a + b);
      setTotalScore(sumValue);
    }
  }, [answers]);

  useEffect(() => {
    console.log(totalScore);
  }, [totalScore]);
  return (
    <div className="survey">
      <Header />
      <QuestionList answers={answers} setAnswers={setAnswers} />
    </div>
  );
};

export const Header = () => {
  return <div className="header">Anti-Bullying Survey</div>;
};
