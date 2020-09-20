import React from "react";
import DefaultText from "../defaultText";
import { Container, Pointer } from "./styled";
import { Image } from "react-native";

const CardPoints = ({ text, image }) => {
  return (
    <Container>
      <Pointer>
        <Image source={image} style={{ width: 50, height: 50 }} />
      </Pointer>
      <DefaultText
        text={text}
        themeColor="primary"
        mTop={50}
        type="title2"
        align="center"
      />
    </Container>
  );
};

export default CardPoints;
