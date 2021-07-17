import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFormContainer = styled.div`
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledCloseBtn = styled.span`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`;

const StyledFormContentLeft = styled.div`
  background: #0467FB;
  border-radius: 10px 0 0 10px;
  position: relative;
`;

const StyledFormImg = styled.image`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledFormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`;

const StyledFormWrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFormText = styled.h1`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #fff;
`;

const StyledFormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

const StyledInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

const StyledButton = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
    transition: all 0.4s ease-out;
  }
`;

const StyledFormMessage = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #27cdff;
  font-weight: 600;
`;

export {
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
};
