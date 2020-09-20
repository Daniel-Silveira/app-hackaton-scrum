import React, { useEffect, useState } from "react";
import DefaultText from "../../components/defaultText";
import HeaderCards from "../../components/header";
import { Container, Header } from "./styled";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import Button from "../../components/button";

const Room = ({ navigation, route }) => {
  const data = route?.params?.data;
  const {
    user: { user },
    room: { room },
  } = useSelector((value) => value);

  const [response, setResponse] = useState([]);
  const [task, setTask] = useState();
  const ENDPOINT = "https://64eec3200afa.ngrok.io";
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("room", (data) => {
      setResponse(data);
    });
    socket.emit("room", { roomId: room._id, name: user.name || "Anonimo" });
  }, [user]);

  const start = () => {
    socket.emit("roomAdmin", { taskId: "teste" });
  };

  useEffect(() => {
    socket.on("roomAdmin", (data) => {
      setTask(data.taskId);
    });
  }, []);

  useEffect(() => {
    !!task && navigation.navigate("Cards");
  }, [task]);

  return !!data?._id ? (
    <Container>
      <HeaderCards data={data} members={response} />
      {user._id === room.ownerId && <Button text="Start" onPress={start} />}
    </Container>
  ) : null;
};

export default Room;
