import React from "react";
import { ActionButton, Container } from "./styled";
import { Feather } from "@expo/vector-icons";
import DefaultText from "../defaultText";
import { useNavigation } from "@react-navigation/native";
import MembersRoom from "../members";
import BoxModal from "../modal/boxModal";

const HeaderCards = ({ data, members }) => {
  const { goBack, navigate } = useNavigation();
  return (
    <Container>
      <ActionButton onPress={() => goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </ActionButton>
      <DefaultText
        text={data.name}
        themeColor="primary"
        type="title2"
        bold
        align="center"
      />
      <ActionButton
        onPress={() =>
          navigate("Modal", {
            component: (props) => (
              <BoxModal size={50} headerShown={false} {...props}>
                <MembersRoom members={members} />
              </BoxModal>
            ),
          })
        }
      >
        <Feather name="users" size={24} color="black" />
      </ActionButton>
    </Container>
  );
};

export default HeaderCards;
