import React from "react";
import { View } from "react-native";
import DefaultText from "../defaultText";
import { Container } from "./styled";

const CardRoom = ({ title, description, rate, fix, onPress }) => {
  return fix ? (
    <Container fix onPress={onPress}>
      <DefaultText
        text={title}
        themeColor="primary"
        type="body"
        align="left"
        color="rgba(0,0,0,.8)"
      />

      <DefaultText
        text={rate || "?"}
        themeColor="primary"
        type="body"
        color="rgba(0,0,0,.8)"
        align="right"
      />
    </Container>
  ) : (
    <Container onPress={onPress}>
      <View>
        <DefaultText
          text={title}
          themeColor="primary"
          type="body"
          color="rgba(0,0,0,.8)"
          align="left"
        />
        <DefaultText
          text={description}
          themeColor="primary"
          color="rgba(0,0,0,.8)"
          type="caption"
          align="left"
        />
      </View>
      <DefaultText
        text={rate || "?"}
        themeColor="primary"
        type="body"
        color="rgba(0,0,0,.8)"
        align="right"
      />
    </Container>
  );
};

export default CardRoom;
