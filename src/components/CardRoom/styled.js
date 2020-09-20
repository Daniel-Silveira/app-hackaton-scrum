import styled, { css } from "styled-components/native";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(90)};
  border-radius: ${(g) => g.theme.radius.medium};
  border-color: rgba(0, 0, 0, 0.5);
  border-width: 1px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${getRelativeSize(10)};
  padding: ${getRelativeSize(5)} ${getRelativeSize(10)};
  ${({ fix }) =>
    fix &&
    css`
      border-style: dashed;
    `}
`;
