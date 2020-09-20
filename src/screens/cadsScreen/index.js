import React from "react";
import Button from "../../components/button";
import { Container, FixCard } from "./styled";
import HeaderCards from "../../components/header";
import DefaultText from "../../components/defaultText";
import CardPoints from "../../components/cardPoints";

const Cards = () => {
  const data = [
    { number: "0" },
    { number: "1" },
    { number: "2" },
    { number: "3" },
    { number: "5" },
    { number: "8" },
    { number: "?" },
    { number: "inf" },
    { number: "coffe" },
  ];
  return (
    <Container>
      <HeaderCards />
      <DefaultText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis in id pellentesque ullamcorper"
        themeColor="primary"
        type="body"
        width={95}
        mTop={20}
        align="center"
      />
      <FixCard>
        {data.map((i) => (
          <CardPoints text={i.number} />
        ))}
      </FixCard>
    </Container>
  );
};

export default Cards;
