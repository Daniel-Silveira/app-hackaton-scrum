import React from "react";
import { Text } from "react-native";
import Button from "../../components/button";
import BoxModal from "../../components/modal/boxModal";
import { Container } from "./styled";

const Initial = ({ navigation }) => {
  return (
    <Container>
      <Button
        onPress={() => navigation.navigate("Cards", { screen: "Cards" })}
        color="primary"
        align="center"
        mTop={20}
        text="Criar sala"
        onPress={() =>
          navigation.navigate("Modal", { screen: <BoxModal></BoxModal> })
        }
      />
      <Button color="primary" align="center" mTop={20} text="Entrar na sala" />
      <Button color="primary" align="center" mTop={20} text="Scrum Poker" />
    </Container>
  );
};

export default Initial;
