import React, { useState } from "react";
import QuestionComponent from "../question/QuestionComponent";
import { StyledSurveyWrapper } from "./styles";

function TakingSurveyComponent(props) {
  const [onSuccess, setOnSuccess] = useState(false);
  const submitHandler = () => {
    setOnSuccess(true);
  };

  const questionsList = props.data.map((item, index) => {
    return <QuestionComponent key={index} data={item} />;
  });

  return (
    <StyledSurveyWrapper>
      {questionsList}
      <button className="btn" onClick={submitHandler}>
        Confirm
      </button>
      {onSuccess && <h2>Submission Successfull!</h2>}
    </StyledSurveyWrapper>
  );
}

export default TakingSurveyComponent;
