import styled, { css } from "styled-components";

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color:#ff5e6c;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #FF1D5C;
  }
`;

const StyledMessage = styled.h4`
    position: relative;
    min-height: 1em;
    margin: 1em 0;
    font-size: 0.9rem;
    padding: 1em 1.5em;
    line-height: 1.4285em;
    color: rgba(0,0,0,.87);
    text-align: center;
`

export { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledMessage }