import styled, { css } from "styled-components";
import { User, Lock } from "@styled-icons/boxicons-regular";
import { Email } from "@styled-icons/material";

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

const StyledIcon = styled.i`
  position: absolute;
  margin: 5px;
  background: url${({ icon }) => {
    if (icon === "user") return User;
    else if (icon === "email") return Email;
    else if (icon === "password") return Lock;
    else if (icon === "passwordConfirmation") return Lock;
    else return "";
  }};

  width: 50px;
  height: 50px;
`;

const StyledButton = styled.button`
  display: block;
  background-color: #4abdac;
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
    background-color: #32897c;
  }
`;

const StyledMessage = styled.h4`
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  font-size: 0.9rem;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
`;

export {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledIcon,
  StyledButton,
  StyledMessage,
};