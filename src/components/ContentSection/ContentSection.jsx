import React from "react";
import { Container } from "../../globalStyles";
import { ContentSec, ContentRow, ContentColumn, TextWrapper } from "./ContentSection.elements";

const ContentSection = ({ lightBg, imgStart}) => {
  return (
    <>
      <ContentSec lightBg={lightBg}>
        <Container>
          <ContentRow imgStart={imgStart}>
            <ContentColumn>
              <TextWrapper>
                Home Page
              </TextWrapper>
            </ContentColumn>
          </ContentRow>
        </Container>
      </ContentSec>
    </>
  );
};

export default ContentSection;
