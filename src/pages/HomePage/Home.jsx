import React from "react";
import ContentSection from "../../components/ContentSection/ContentSection";
import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <ContentSection {...homeObjOne}/>
    </>
  );
};

export default Home;
