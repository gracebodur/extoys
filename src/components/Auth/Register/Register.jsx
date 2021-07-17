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

const Register = () => {
  return (
    <StyledFormContainer>
      <StyledCloseBtn>x</StyledCloseBtn>
      <StyledFormContentLeft>
        <StyledFormImg></StyledFormImg>
      </StyledFormContentLeft>
      <StyledFormContentRight>
        <StyledForm>
          <StyledFormText>
            Get started with us today! Create your account by filling out the
            information below.
          </StyledFormText>
          <StyledFormWrapper>
            <StyledFormLabel htmlFor="username"> Username</StyledFormLabel>
            <StyledInput name="username" type="text"></StyledInput>
          </StyledFormWrapper>

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

          <StyledFormWrapper>
            <StyledFormLabel htmlFor="passwordConfirmation">
              Confirm Password
            </StyledFormLabel>
            <StyledInput
              name="passwordConfirmation"
              type="password"
              autoComplete="off"
            ></StyledInput>
          </StyledFormWrapper>

          <StyledButton>Submit</StyledButton>
          <StyledFormMessage>
            Already have an account? <LoginLink to="/login">Login</LoginLink>
          </StyledFormMessage>
        </StyledForm>
      </StyledFormContentRight>
    </StyledFormContainer>
  );
};

export default Register;
