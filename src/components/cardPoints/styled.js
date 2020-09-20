import styled from "styled-components/native";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(30)};
  height: ${getPercentageSizeWidth(40)};
  background-color: ${(g) => g.theme.color.button.input};
  border-radius: ${(g) => g.theme.radius.medium};
  margin-top: ${getRelativeSize(15)};
  align-items: center;
`;

export const Pointer = styled.View`
  align-items: center;
  width: ${getRelativeSize(20)};
  height: ${getRelativeSize(20)};
  margin-top: ${getPercentageSizeWidth(12)};
  border-radius: ${(g) => g.theme.radius.ball};
`;
