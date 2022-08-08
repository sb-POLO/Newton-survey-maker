import React, { useRef } from "react";
import { StyledWrapper, StyledInput, StyledButton } from "./styles.js";

function OptionForm(props) {
  const inputChangeHandler = (e) => {
    props.onChange(props.id, e.target.value);
  };
  return (
    <StyledWrapper>
      <StyledInput
        type="text"
        placeholder="Type option here"
        defaultValue={props.option}
        onChange={inputChangeHandler}
      />
      <StyledButton onClick={props.onAdd}>+</StyledButton>
      <StyledButton onClick={props.onRemove.bind(null, props.id)}>
        -
      </StyledButton>
    </StyledWrapper>
  );
}

export default OptionForm;
