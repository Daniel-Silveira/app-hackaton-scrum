import React, { useEffect } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import CreateRoom from "../../components/createRoom";
import Login from "../../components/login";
import BoxModal from "../../components/modal/boxModal";
import { listRoom } from "../../redux/room";
import { Container } from "./styled";

const Initial = ({ navigation }) => {
  const {
    user: { user },
    room: { list },
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

  useEffect(() => {
    !!user._id && dispatch(listRoom(user._id));
  }, [user]);

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
      <Button color="primary" align="center" mTop={20} text="Entrar na sala" />
      <Button color="primary" align="center" mTop={20} text="Scrum Poker" />
    </Container>
  );
};

export default Initial;
