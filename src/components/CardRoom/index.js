import React from "react";
import { View } from "react-native";
import DefaultText from "../defaultText";
import { Container, FixCard } from "./styled";

const CardRoom = ({ title, description, rate }) => {
  return (
    <Container>
      <FixCard>
        <View>
          <DefaultText
            text={title}
            themeColor="primary"
            mTop={10}
            type="title2"
            align="left"
          />
          <DefaultText
            text={description}
            themeColor="primary"
            mTop={20}
            type="body"
            align="left"
          />
        </View>
        <DefaultText
          text={rate || "?"}
          themeColor="primary"
          mTop={10}
          type="title2"
          align="right"
        />
      </FixCard>
    </Container>
  );
};

export default CardRoom;
