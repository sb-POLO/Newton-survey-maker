import React from "react";
import { CREATING_SURVEY, TAKING_SURVEY } from "../../constants";
import { StyledHome } from "./styles";

function HomeComponent(props) {
  const createSurveyHandler = (mode) => {
    props.onOptionSelect(mode);
  };

  return (
    <StyledHome>
      <button onClick={createSurveyHandler.bind(null, CREATING_SURVEY)}>
        Create Survey
      </button>
      {props.survey.length > 0 && (
        <button onClick={createSurveyHandler.bind(null, TAKING_SURVEY)}>
          Take Survey
        </button>
      )}
    </StyledHome>
  );
}

export default HomeComponent;
