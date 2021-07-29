import React from "react";
import {
  StyledFormContainer,
  StyledCloseBtn,
  StyledFormContentLeft,
  StyledFormImg,
  StyledFormContentRight,
  StyledFormWrapper,
  StyledForm,
  StyledFormText,
  StyledFormLabel,
  StyledInput,
  StyledButton,
  StyledFormMessage,
  LoginLink,
} from "../Form.elements";

const Login = () => {
  return (
    <StyledFormContainer>
      <StyledCloseBtn>x</StyledCloseBtn>
      <StyledFormContentLeft>
        <StyledFormImg></StyledFormImg>
      </StyledFormContentLeft>
      <StyledFormContentRight>
        <StyledForm>
          <StyledFormText>
            Welcome Back!
          </StyledFormText>
          <StyledFormWrapper>
            <StyledFormLabel htmlFor="email">Email</StyledFormLabel>
            <StyledInput name="email" type="email"></StyledInput>
          </StyledFormWrapper>

          <StyledFormWrapper>
            <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
            <StyledInput
              name="password"
              type="password"
              autoComplete="off"
            ></StyledInput>
          </StyledFormWrapper>
          <StyledButton>Submit</StyledButton>
          <StyledFormMessage>
            Don't have an account?{" "}
            <LoginLink to="/register">Register</LoginLink>
          </StyledFormMessage>
        </StyledForm>
      </StyledFormContentRight>
    </StyledFormContainer>
  );
};

export default Login;
