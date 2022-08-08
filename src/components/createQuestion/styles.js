import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 1em;
  margin-bottom: 1em;
`;

export const StyledQuestionForm = styled.div`
  padding: 3em 0;

  p {
    padding-top: 1em;
    padding-bottom: 0.25em;
    font-size: 0.9rem;
  }

  input {
    width: 100%;
  }
`;

export const StyledOptions = styled.div``;

export const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.5em;
  margin: 0;
  width: 50px;
  border: 1px solid rgb(209, 209, 209);
  color: black;
  border-radius: 0px;
  &:hover {
    cursor: pointer;
    background-color: #d4d4d4;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5em;
  outline: none;
  border: none;
  border: 1px solid rgb(209, 209, 209);
`;

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin: 1em 0;
  }

  button + button {
    margin-left: 1em;
  }
`;
