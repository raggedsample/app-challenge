import React, { useEffect, useState } from "react";
import { questionObject } from "./questionObject.js";
import { Choices } from "./choices.js";

export const QuestionList = (props) => {
  const questionNumbers = [...Array(questionObject.length).keys()];

  // This function can be used to get the response for a particular question
  const handleResponse = (questionNumber, choice) => {
    props.setAnswers({
      ...props.answers,
      [questionNumber]: choice
    });
  };

  return (
    <div className="question-list">
      {questionNumbers.map((number) => {
        return <Question questionNumber={number} onResponse={handleResponse} />;
      })}
    </div>
  );
};

export const Question = (props) => {
  const [selectedChoice, setSelectedChoice] = React.useState(null);

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
    // Propagating the response to the parent (optional)
    props.onResponse(props.questionNumber, choice);
  };

  return (
    <div className="question">
      <div>{questionObject[props.questionNumber].question}</div>
      <div>
        <Choices
          choices={questionObject[props.questionNumber].choices}
          onSelect={handleChoiceSelection}
          selectedChoice={selectedChoice}
        />
      </div>
    </div>
  );
};
