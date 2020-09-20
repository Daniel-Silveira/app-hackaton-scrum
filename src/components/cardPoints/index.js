import React from "react";
import DefaultText from "../defaultText";
import { Container, Pointer } from "./styled";

const CardPoints = ({ text }) => {
  return (
    <Container>
      <Pointer />
      <DefaultText
        text={text}
        themeColor="primary"
        mTop={20}
        type="title2"
        align="center"
      />
    </Container>
  );
};

export default CardPoints;
