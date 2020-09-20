import styled from "styled-components/native";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  width: ${getPercentageSizeWidth(90)};
  height: ${getPercentageSizeWidth(35)};
  border-radius: ${(g) => g.theme.radius.medium};
  border-color: ${(g) => g.theme.color.button.black};
  border-width: 1px;
  margin-top: ${getRelativeSize(10)};
  align-items: center;
`;

export const FixCard = styled.View`
  flex-direction: row;
  padding: ${getRelativeSize(10)};
  width: ${getPercentageSizeWidth(90)};
  justify-content: space-around;
  align-items: center;
  margin-top: ${getRelativeSize(15)};
`;
