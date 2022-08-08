import React, { useRef, useState } from "react";
import { MULTI_SELECT, SINGLE_SELECT } from "../../constants";
import OptionForm from "./OptionForm";
import {
  StyledActions,
  StyledInput,
  StyledOptions,
  StyledQuestionForm,
  StyledSelect,
} from "./styles";

function CreateQuestion(props) {
  const [questionType, setQuestionType] = useState(MULTI_SELECT);
  const questionRef = useRef(null);
  const [options, setOptions] = useState([""]);

  const onTypeChangeHandler = (e) => {
    if (e.target.value === MULTI_SELECT) {
      setQuestionType(MULTI_SELECT);
    } else {
      setQuestionType(SINGLE_SELECT);
    }
    console.log(options);
    resetHandler();
  };

  const onAddHandler = (e) => {
    e.preventDefault();
    setOptions((prev) => {
      if (questionType === MULTI_SELECT && prev.length < 4) {
        return [...prev, ""];
      }
      if (questionType === SINGLE_SELECT && prev.length < 2) {
        return [...prev, ""];
      }
      return prev;
    });
  };

  const onRemoveHandler = (key) => {
    setOptions((prev) => {
      if (prev.length > 1) return prev.filter((item, idx) => idx !== key);
      return prev;
    });
  };

  const onOptionChangeHandler = (key, option) => {
    setOptions((prev) => {
      const newState = [...prev];
      newState[key] = option;
      return newState;
    });
  };

  const addQuestionHandler = () => {
    const data = {
      title: questionRef.current.value,
      optionsList: [...options],
      type: questionType,
    };

    props.onAddQuestion(data);
    resetHandler();
  };

  const publishHandler = (e) => {
    props.onPublish();
  };

  const resetHandler = () => {
    questionRef.current.value = "";
    setOptions([""]);
  };

  const optionsList = options.map((item, index) => {
    return (
      <OptionForm
        key={index}
        option={item}
        onAdd={onAddHandler}
        onRemove={onRemoveHandler}
        onChange={onOptionChangeHandler}
        id={index}
      />
    );
  });

  return (
    <StyledQuestionForm>
      <StyledSelect defaultValue={questionType} onChange={onTypeChangeHandler}>
        <option value="multi-select">Multi Select</option>
        <option value="single-select">Single Select</option>
      </StyledSelect>
      <StyledInput
        type="text"
        placeholder="Type your question."
        defaultValue=""
        ref={questionRef}
      />
      <p>Options</p>
      <StyledOptions>{optionsList}</StyledOptions>
      <StyledActions>
        <button onClick={addQuestionHandler}>Add Question</button>
        <button onClick={publishHandler}>Publish</button>
      </StyledActions>
    </StyledQuestionForm>
  );
}

export default CreateQuestion;
