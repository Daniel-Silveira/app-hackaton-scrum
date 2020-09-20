import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { Container, FixCard } from "./styled";
import HeaderCards from "../../components/header";
import DefaultText from "../../components/defaultText";
import CardPoints from "../../components/cardPoints";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";

const Cards = ({ navigation }) => {
  const ENDPOINT = "https://64eec3200afa.ngrok.io";
  const socket = socketIOClient(ENDPOINT);
  const [task, setTask] = useState();
  const {
    user: { user },
    room: { room },
  } = useSelector((value) => value);

  const data = [
    { number: "0", image: require("../../Icons/star.png"), color: "#98FB98" },
    {
      number: "1",
      image: require("../../Icons/pokeball.png"),
      color: "#87CEFA",
    },
    {
      number: "2",
      image: require("../../Icons/squirtle.png"),
      color: "#3CB371",
    },
    {
      number: "3",
      image: require("../../Icons/pikachu.png"),
      color: "#7FFFD4",
    },
    {
      number: "5",
      image: require("../../Icons/charmander.png"),
      color: "#D02090",
    },
    { number: "8", image: require("../../Icons/zubat.png"), color: "#4682B4" },
    { number: "?", image: require("../../Icons/meowth.png"), color: "#32CD32" },
    {
      number: "inf",
      image: require("../../Icons/compass.png"),
      color: "#696969",
    },
    {
      number: "coffe",
      image: require("../../Icons/hot-cup.png"),
      color: "#FFD700",
    },
  ];
  const backEmit = () => {
    socket.emit("roomAdmin", { taskId: false });
  };

  useEffect(() => {
    socket.on("roomAdmin", (data) => {
      setTask(data.taskId);
    });
  }, []);

  // useEffect(() => {
  //   !task && navigation.goBack();
  // }, [task]);qa

  return (
    <Container>
      {user._id === room.ownerId && <Button text="Voltar" onPress={backEmit} />}
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
          <CardPoints image={i.image} text={i.number} />
        ))}
      </FixCard>
    </Container>
  );
};

export default Cards;
