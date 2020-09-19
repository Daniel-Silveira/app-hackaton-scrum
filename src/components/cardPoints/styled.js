import styled from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  width: ${getPercentageSizeWidth(30)};
  height: ${getPercentageSizeWidth(40)};
  background-color: ${(g) => g.theme.color.button.input};
  border-radius: ${(g) => g.theme.radius.medium};
  margin-top: ${getRelativeSize(15)};
  align-items: center;
`;

export const Pointer = styled.View`
  width: ${getPercentageSizeWidth(15)};
  height: ${getPercentageSizeWidth(15)};
  margin-top: ${getPercentageSizeWidth(12)};
  background-color: ${(g) => g.theme.color.button.primary};
  border-radius: ${(g) => g.theme.radius.ball};
`;
