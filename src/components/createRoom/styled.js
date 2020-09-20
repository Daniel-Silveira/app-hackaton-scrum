import styled from "styled-components/native";
import { getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const BoxPrivate = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${getRelativeSize(5)};
  margin: ${getRelativeSize(5)} 0;
`;
