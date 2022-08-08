import { useState } from "react";
import HomeComponent from "../home/HomeComponent";
import TakingSurveyComponent from "../takingSurvey/TakingSurveyComponent";
import { CREATING_SURVEY, TAKING_SURVEY } from "../../constants";
import CreateQuestion from "../createQuestion/CreateQuestion";
import { StyledMain } from "./styles";

const DUMMY = [
  {
    title: "Which apps are on your phone right now ?",
    optionsList: ["Whatsapp", "Facebook", "Snapchat", "Telegram"],
    type: "multi-select",
  },
  {
    title: "Are you married?",
    optionsList: ["Yes", "No"],
    type: "single-select",
  },
  {
    title: "What games do you play ?",
    optionsList: ["Valorant", "Monster hunter", "CSGO", "Witcher 3"],
    type: "multi-select",
  },
  {
    title: "Do you like sweets ?",
    optionsList: ["Yes", "No"],
    type: "single-select",
  },
];

function App() {
  const [questions, setQuestions] = useState(DUMMY);
  const [currentMode, setCurrentMode] = useState("");

  const onPublishHandler = () => {
    setCurrentMode(TAKING_SURVEY);
  };

  const changeCurrentMode = (mode) => {
    setCurrentMode(mode);
  };

  const onAddQuestionHandler = (data) => {
    setQuestions((prev) => {
      const newState = [...prev, data];
      return newState;
    });
  };

  return (
    <StyledMain id="main">
      <h1>Survey Tiger</h1>
      {currentMode === "" && (
        <HomeComponent survey={questions} onOptionSelect={changeCurrentMode} />
      )}
      {currentMode === CREATING_SURVEY && (
        <CreateQuestion
          onPublish={onPublishHandler}
          onAddQuestion={onAddQuestionHandler}
        />
      )}
      {currentMode === TAKING_SURVEY && (
        <TakingSurveyComponent
          data={questions}
          onSubmitSurvey={changeCurrentMode}
        />
      )}
    </StyledMain>
  );
}

export default App;
