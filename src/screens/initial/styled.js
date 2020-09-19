import styled from "styled-components";
import { getPercentageSizeWidth } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.whitePure};
  align-items: center;
  width: ${getPercentageSizeWidth(100)};
  margin-top: ${getPercentageSizeWidth(80)};
`;
