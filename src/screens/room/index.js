import React from "react";
import CardRoom from "../../components/CardRoom";
import HeaderCards from "../../components/header";
import { Container, Header, FixCard } from "./styled";
import { ScrollView } from "react-native";

const Room = ({ route }) => {
  const list = [
    { title: "teste", description: "teste", rate: "" },
    { title: "teste", description: "teste", rate: "" },
  ];
  const data = route?.params?.data;
  return !!data?._id ? (
    <Container>
      <HeaderCards data={data} />
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
