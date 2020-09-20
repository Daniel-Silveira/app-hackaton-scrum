import styled from "styled-components/native";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.whitePure};
  align-items: center;
  width: ${getPercentageSizeWidth(100)};
`;

export const FixCard = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: ${getRelativeSize(10)};
`;
