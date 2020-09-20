import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Button from "../button";
import DefaultText from "../defaultText";
import Input from "../input";
import { BoxPrivate, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  createdStatus,
  createRoom,
  createTask,
  joinRoom,
} from "../../redux/room";
import { useNavigation } from "@react-navigation/native";

const CreateTask = ({ data }) => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();
  const [info, setInfo] = useState({});

  const {
    room: { created },
  } = useSelector((value) => value);

  useEffect(() => {
    dispatch(createdStatus(false));
  }, []);

  useEffect(() => {
    !!created && goBack();
  }, [created]);

  return (
    <Container>
      <DefaultText type="subtitle" align="center" text="Criar card" />
      <View>
        <Input
          value={info.title}
          onChangeText={(text) => setInfo({ ...info, title: text })}
          placeholder="Nome"
        />
        <Input
          value={info.description}
          onChangeText={(text) => setInfo({ ...info, description: text })}
          mTop={10}
          placeholder="Descrição"
        />
      </View>
      <View>
        <Button
          text="Criar"
          onPress={() => dispatch(createTask({ ...info, roomId: data._id }))}
        />
      </View>
    </Container>
  );
};

export default CreateTask;
