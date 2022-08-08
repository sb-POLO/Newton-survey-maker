import React from "react";
import { MULTI_SELECT } from "../../constants";
import { StyledOption, StyledQuestion, StyledOptionsWrapper } from "./styles";

function QuestionComponent(props) {
  let options = [];

  if (props.data.type === MULTI_SELECT) {
    options = props.data.optionsList.map((item, index) => {
      return (
        <StyledOption key={index}>
          <input type="checkbox" value={item} name={item} />
          <label htmlFor={item}>{item}</label>
        </StyledOption>
      );
    });
  } else {
    options = props.data.optionsList.map((item, index) => {
      return (
        <StyledOption key={index}>
          <input type="radio" value={item} name={props.data.title} />
          <label htmlFor={props.data.title}>{item}</label>
        </StyledOption>
      );
    });
  }

  return (
    <StyledQuestion>
      <p>{props.data.title}</p>
      <StyledOptionsWrapper>{options}</StyledOptionsWrapper>
    </StyledQuestion>
  );
}

export default QuestionComponent;
