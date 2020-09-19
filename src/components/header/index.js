import React from "react";
import { ActionButton, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import DefaultText from "../defaultText";

const HeaderCards = () => {
  return (
    <Container>
      <ActionButton>
        <Feather name="chevron-left" size={24} color="black" />
      </ActionButton>
      <DefaultText
        text=""
        themeColor="primary"
        type="title2"
        bold
        align="center"
      />
      <ActionButton>
        <Feather name="users" size={24} color="black" />
      </ActionButton>
    </Container>
  );
};

export default HeaderCards;
