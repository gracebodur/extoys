import React from "react";
import ContentSection from "../../components/ContentSection/ContentSection";
import { contentOne, contentTwo, contentThree, contentFour } from "./Data";

const Home = () => {
  return (
    <>
      <ContentSection {...contentOne}/>
      <ContentSection {...contentTwo}/>
      <ContentSection {...contentThree}/>
      <ContentSection {...contentFour}/>
    </>
  );
};

export default Home;
