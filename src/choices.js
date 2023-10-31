import React from "react";

export const Choices = (props) => {
  return (
    <div>
      {props.choices.map((choice, index) => {
        return (
          <div key={index}>
            <Choice
              choiceText={choice}
              isSelected={index === props.selectedChoice}
              onSelect={() => props.onSelect(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export const Choice = (props) => {
  return (
    <div
      className={`choices-list-item ${props.isSelected ? "selected" : ""}`}
      onClick={props.onSelect}
    >
      {props.choiceText}
    </div>
  );
};
