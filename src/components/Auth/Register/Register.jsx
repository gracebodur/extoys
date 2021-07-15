import React, { Component } from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledIcon,
  StyledButton,
  StyledMessage,
} from "../../../styles/FormStyle";

export default class Register extends Component {
  render() {
    return (
      <StyledFormWrapper>
        <StyledForm>
          <StyledIcon icon={"user"} title='user icon'/>
          <StyledInput name="username" type="text"></StyledInput>

          <StyledIcon icon={"email"} title='email icon'/>
          <StyledInput name="email" type="email"></StyledInput>

          <StyledIcon icon={"password"} title='lock icon'/>
          <StyledInput
            name="password"
            type="password"
            autoComplete="off"
          ></StyledInput>

          <StyledIcon icon={"passwordConfirmation"} title='lock icon'/>
          <StyledInput
            name="passwordConfirmation"
            type="password"
            autoComplete="off"
          ></StyledInput>

          <StyledButton>Submit</StyledButton>
          <StyledMessage>Already have an account? Login</StyledMessage>
        </StyledForm>
      </StyledFormWrapper>
    );
  }
}
