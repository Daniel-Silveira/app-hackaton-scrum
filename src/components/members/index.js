import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Button from "../button";
import DefaultText from "../defaultText";
import Input from "../input";
import { BoxPrivate, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { createdStatus, createRoom, joinRoom } from "../../redux/room";
import { useNavigation } from "@react-navigation/native";

const MembersRoom = ({ members }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [room, setRoom] = useState({ invite: "Pub551" });
  const {
    user: { user },
    room: { list, private: privateRoom, joined, room: roomData },
  } = useSelector((value) => value);

  return (
    <Container>
      <DefaultText type="subtitle" align="center" text="Participantes" />
      <ScrollView style={{ flex: 1 }}>
        {!!members?.length && (
          <View style={{ flex: 1 }}>
            {members.map((item, index) => (
              <DefaultText vertical={1} text={item.name} />
            ))}
          </View>
        )}
      </ScrollView>
      <View></View>
    </Container>
  );
};

export default MembersRoom;
