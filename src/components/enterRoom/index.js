import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Button from "../button";
import DefaultText from "../defaultText";
import Input from "../input";
import { BoxPrivate, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { createdStatus, createRoom, joinRoom } from "../../redux/room";
import { useNavigation } from "@react-navigation/native";

const EnterRoom = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [room, setRoom] = useState({ invite: "Pub551" });
  const {
    user: { user },
    room: { list, private: privateRoom, joined, room: roomData },
  } = useSelector((value) => value);

  return (
    <Container>
      <DefaultText type="subtitle" align="center" text="Entrar na sala" />
      <View>
        <Input
          value={room.invite}
          onChangeText={(text) => setRoom({ ...room, invite: text })}
          placeholder="Digite o codigo da sala"
        />
        {privateRoom && (
          <Input
            mTop={10}
            value={room.password}
            onChangeText={(text) => setRoom({ ...room, password: text })}
            placeholder="Digite a senha da sala"
          />
        )}
      </View>
      <View>
        <Button text="Entrar" onPress={() => dispatch(joinRoom(room))} />
      </View>
    </Container>
  );
};

export default EnterRoom;
