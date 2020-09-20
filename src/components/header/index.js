import React from "react";
import { ActionButton, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import DefaultText from "../defaultText";
import { useNavigation } from "@react-navigation/native";

const HeaderCards = ({ data }) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <ActionButton onPress={() => goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </ActionButton>
      <DefaultText
        text={data.name}
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
