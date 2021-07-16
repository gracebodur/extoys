import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  ContentSec,
  ContentRow,
  ContentColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img
} from "./ContentSection.elements";

const ContentSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  start,
  img,
  alt
}) => {
  return (
    <>
      <ContentSec lightBg={lightBg}>
        <Container>
          <ContentRow imgStart={imgStart}>
            <ContentColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <Link to="/register">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </ContentColumn>
            <ContentColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}></Img>
              </ImgWrapper>
            </ContentColumn>
          </ContentRow>
        </Container>
      </ContentSec>
    </>
  );
};

export default ContentSection;
