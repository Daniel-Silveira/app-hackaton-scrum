import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import CreateRoom from "../../components/createRoom";
import EnterRoom from "../../components/enterRoom";
import Input from "../../components/input";
import Login from "../../components/login";
import BoxModal from "../../components/modal/boxModal";
import { joinRoom, listRoom } from "../../redux/room";
import { Container } from "./styled";

const Initial = ({ navigation }) => {
  const {
    user: { user },
    room: { list, private: privateRoom, joined, room: roomData },
  } = useSelector((value) => value);

  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!user._id) {
      return navigation.navigate("Modal", {
        component: (props) => (
          <BoxModal size={50} headerShown={false} {...props}>
            <Login />
          </BoxModal>
        ),
      });
    }
    return navigation.navigate("Modal", {
      component: (props) => (
        <BoxModal size={50} headerShown={false} {...props}>
          <CreateRoom />
        </BoxModal>
      ),
    });
  };

  const enterRoom = () => {
    return navigation.navigate("Modal", {
      component: (props) => (
        <BoxModal size={30} headerShown={false} {...props}>
          <EnterRoom />
        </BoxModal>
      ),
    });
  };

  useEffect(() => {
    !!user._id && dispatch(listRoom(user._id));
  }, [user]);

  useEffect(() => {
    !!joined &&
      navigation.navigate("Room", {
        data: roomData,
      });
  }, [joined]);

  return (
    <Container>
      {!!user?._id && !!list?.length && (
        <Button
          color="primary"
          align="center"
          text="Minhas sala"
          onPress={() => navigation.navigate("Rooms")}
        />
      )}
      <Button
        onPress={() => navigation.navigate("Cards", { screen: "Cards" })}
        color="primary"
        align="center"
        mTop={20}
        text="Criar sala"
        onPress={handleCreate}
      />

      <Button
        color="primary"
        align="center"
        mTop={20}
        text="Entrar em uma sala"
        onPress={enterRoom}
      />
    </Container>
  );
};

export default Initial;
