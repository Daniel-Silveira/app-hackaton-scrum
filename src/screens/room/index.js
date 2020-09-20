import React from "react";
import DefaultText from "../../components/defaultText";
import HeaderCards from "../../components/header";
import { Container, Header } from "./styled";

const Room = ({ route }) => {
  const data = route?.params?.data;
  return !!data?._id ? (
    <Container>
      <HeaderCards data={data} />
    </Container>
  ) : null;
};

export default Room;
