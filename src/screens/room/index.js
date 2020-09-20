import React, { useEffect, useState } from "react";
import DefaultText from "../../components/defaultText";
import HeaderCards from "../../components/header";
import { Container, Header, FixCard } from "./styled";

import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
import Button from "../../components/button";
import { ScrollView } from "react-native";
import CardRoom from "../../components/CardRoom";


const Room = ({  navigation, route  }) => {
  const list = [
    { title: "teste", description: "teste", rate: "" },
    { title: "teste", description: "teste", rate: "" },
  ];
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
      <ScrollView>
        <FixCard>
          {list.map((i) => (
            <>
              <CardRoom
                title={i.title}
                description={i.description}
                rate={i.rate}
              />
            </>
          ))}
        </FixCard>
      </ScrollView>
    </Container>
  ) : null;
};

export default Room;
