import React from "react";
import Button from "../../components/button";
import { Container, FixCard } from "./styled";
import HeaderCards from "../../components/header";
import DefaultText from "../../components/defaultText";
import CardPoints from "../../components/cardPoints";

const Cards = () => {
  return (
    <Container>
      <HeaderCards />
      <DefaultText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis in id pellentesque ullamcorper"
        themeColor="primary"
        type="body"
        mTop={20}
        align="center"
      />
      <FixCard>
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
        <CardPoints />
      </FixCard>
    </Container>
  );
};

export default Cards;
