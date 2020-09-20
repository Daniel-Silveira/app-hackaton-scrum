import styled from "styled-components/native";
import { getPercentageSizeWidth } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.whitePure};
  align-items: center;
  justify-content: center;
`;
