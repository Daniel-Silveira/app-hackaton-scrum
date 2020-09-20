import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DefaultText from "../../components/defaultText";
import HeaderCards from "../../components/header";
import { Card, Container } from "./styled";

const RoomsScreen = ({ navigation }) => {
  const {
    room: { list },
  } = useSelector((value) => value);
  return (
    <Container>
      <HeaderCards data={{ title: "Salas" }} noMember />
      {list?.map((item, index) => (
        <Card
          key={index}
          onPress={() =>
            navigation.navigate("Room", {
              data: item,
            })
          }
        >
          <DefaultText text={item.name} />
        </Card>
      ))}
    </Container>
  );
};

export default RoomsScreen;
