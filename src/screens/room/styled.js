import styled from "styled-components/native";
import { getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FixCard = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: ${getRelativeSize(10)};
`;
