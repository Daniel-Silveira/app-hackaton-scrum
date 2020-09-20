import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { Container, FixCard } from "./styled";
import HeaderCards from "../../components/header";
import DefaultText from "../../components/defaultText";
import CardPoints from "../../components/cardPoints";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";

const Cards = ({ navigation, route }) => {
  const ENDPOINT = "http://10.0.0.109:3002";
  const params = route?.params?.data;
  const socket = socketIOClient(ENDPOINT);
  const [task, setTask] = useState();
  const [votes, setVotes] = useState([]);
  const {
    user: { user },
    room: { room },
  } = useSelector((value) => value);

  const list = [
    { rate: "0" },
    { rate: "1" },
    { rate: "2" },
    { rate: "3" },
    { rate: "5" },
    { rate: "8" },
    { rate: "?" },
    { rate: "inf" },
    { rate: "coffe" },
  ];
  // const backEmit = () => {
  //   socket.emit("roomAdmin", { taskId: false });
  // };

  useEffect(() => {
    socket.on("taskVote", (data) => {
      setVotes(data);
    });
  }, []);

  // useEffect(() => {
  //   !task && navigation.goBack();
  // }, [task]);

  const vote = (item) => {
    socket.emit("taskVote", { rate: item.number, taskId: params.task._id });
  };

  return (
    <Container>
      <HeaderCards data={params.task} members={params.members} />

      <DefaultText
        text={params.task.description}
        themeColor="primary"
        type="body"
        width={95}
        mTop={20}
        align="center"
      />
      <FixCard>
        {list.map((i, index) => (
          <CardPoints onPress={() => vote(i)} key={index} text={i.rate} />
        ))}
      </FixCard>
    </Container>
  );
};

export default Cards;
