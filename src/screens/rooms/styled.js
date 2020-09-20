import styled from "styled-components/native";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(90)};
  border-width: 1px;
  border-color: #ddd;
  border-radius: 12px;
  padding: ${getRelativeSize(10)};
  margin: ${getRelativeSize(10)} 0;
`;
