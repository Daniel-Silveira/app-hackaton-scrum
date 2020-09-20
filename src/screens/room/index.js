import React, { useEffect, useState } from "react";
import DefaultText from "../../components/defaultText";
import HeaderCards from "../../components/header";
import { Container, Header, FixCard } from "./styled";

import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import { ScrollView } from "react-native";
import CardRoom from "../../components/CardRoom";
import CreateTask from "../../components/createTask";
import BoxModal from "../../components/modal/boxModal";
import { listTask } from "../../redux/room";

const Room = ({ navigation, route }) => {
  const data = route?.params?.data;
  const {
    user: { user },
    room: { room, listTask: list },
  } = useSelector((value) => value);
  const dispatch = useDispatch();
  const [response, setResponse] = useState([]);
  const [task, setTask] = useState({});
  const ENDPOINT = "http://10.0.0.109:3002";
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    !!data._id && dispatch(listTask(data._id));
  }, [data]);

  useEffect(() => {
    socket.on("room", (data) => {
      setResponse(data);
    });
    socket.emit("room", { roomId: data._id, name: user.name || "Anonimo" });
  }, [user]);

  const handlePress = (i) => {
    socket.emit("roomAdmin", i);
  };

  useEffect(() => {
    socket.on("roomAdmin", (data) => {
      setTask(data);
    });
  }, []);

  useEffect(() => {
    !!task?._id &&
      navigation.navigate("Cards", {
        data: { task, members: response },
      });
  }, [task]);

  return !!data?._id ? (
    <Container>
      <HeaderCards data={data} members={response} />
      <ScrollView style={{ marginTop: 10 }}>
        <FixCard>
          <CardRoom
            fix
            title="Criar novo card"
            rate="+"
            onPress={() =>
              navigation.navigate("Modal", {
                component: (props) => (
                  <BoxModal size={30} headerShown={false} {...props}>
                    <CreateTask data={data} />
                  </BoxModal>
                ),
              })
            }
          />
          {list?.map((i, index) => (
            <>
              <CardRoom
                key={index}
                onPress={() => handlePress(i)}
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
