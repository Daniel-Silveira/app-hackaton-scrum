import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Button from "../button";
import DefaultText from "../defaultText";
import Input from "../input";
import { BoxPrivate, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { createdStatus, createRoom } from "../../redux/room";
import { useNavigation } from "@react-navigation/native";

const CreateRoom = () => {
  const [credentials, setCredentials] = useState({});
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const {
    room: { list, created },
    user: { user },
  } = useSelector((value) => value);

  useEffect(() => {
    dispatch(createdStatus(false))
  }, []);

  useEffect(() => {
    created && navigate("Initial");
  }, [created]);

  return (
    <Container>
      <DefaultText type="subtitle" align="center" text="Criar nova sala" />
      <View>
        <Input
          value={credentials.name}
          placeholder="Nome da sala"
          onChangeText={(text) =>
            setCredentials({ ...credentials, name: text })
          }
        />
        <BoxPrivate
          onPress={() =>
            setCredentials({
              ...credentials,
              private: !credentials.private,
              password: "",
            })
          }
        >
          <DefaultText text="Sala privada" color="grey" />
          <Feather
            name={credentials.private ? "toggle-right" : "toggle-left"}
            size={24}
            color={credentials.private ? "#55efc4" : "grey"}
          />
        </BoxPrivate>
        {credentials.private && (
          <Input
            value={credentials.password}
            onChangeText={(text) =>
              setCredentials({ ...credentials, password: text })
            }
            placeholder="Senha"
          />
        )}
      </View>
      <View>
        <Button
          text="Criar sala"
          onPress={() =>
            dispatch(createRoom({ ...credentials, ownerId: user._id }))
          }
        />
      </View>
    </Container>
  );
};

export default CreateRoom;
