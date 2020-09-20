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
  // }, [task]);

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
          <CardPoints text={i.number} />
        ))}
      </FixCard>
    </Container>
  );
};

export default Cards;
