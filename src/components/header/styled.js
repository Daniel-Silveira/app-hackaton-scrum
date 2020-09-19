import styled from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  width: ${getPercentageSizeWidth(95)};
  height: ${getPercentageSizeWidth(30)};
  background-color: ${(g) => g.theme.color.general.whitePure};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${getRelativeSize(10)};
`;

export const ActionButton = styled.TouchableOpacity`
  width: ${getRelativeSize(24)};
`;
