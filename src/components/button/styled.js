import styled, { css } from "styled-components/native";
import { getRelativeSize, getPercentageSizeWidth } from "../../utils";

export const Container = styled.View`
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
  ${({ flexEnd }) =>
    flexEnd &&
    css`
      align-items: flex-end;
    `}
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${(g) => g.theme.color.button.whitePure};
  padding: ${getRelativeSize(15)} ${getRelativeSize(10)};
  border-radius: ${(g) => g.theme.radius.medium};
  border-color: ${(g) => g.theme.color.button.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  width: ${getPercentageSizeWidth(90)};
  ${({ outline, color }) =>
    outline &&
    css`
      background: transparent;
      border-color: ${(g) => g.theme.color.button[color || "greyDarker"]};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
 
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${(g) => g.theme.radius[radius]};
    `};
  ${({ circle, size }) =>
    circle &&
    css`
      width: ${getRelativeSize(size || 50)};
      height: ${getRelativeSize(size || 50)};
      border-radius: ${(g) => g.theme.radius.ball};
    `};
  ${({ background }) =>
    background &&
    css`
      background-color: ${(g) => g.theme.color.button[background]};
    `};
  ${({ backInput }) =>
    backInput &&
    css`
      background-color: ${(g) => g.theme.color.button.input};
      border-color: transparent;
    `};
  ${({ noBackground }) =>
    noBackground &&
    css`
      background-color: ${noBackground && "transparent"};
      border-color: ${noBackground && "transparent"};
    `};
  ${({ backcinz }) =>
    backcinz &&
    css`
      background-color: ${(g) => g.theme.color.button.input};
      border-color: ${backcinz && "transparent"};
      width: ${getPercentageSizeWidth(100)};
      height: ${getPercentageSizeWidth(20)};

      padding: ${getRelativeSize(15)} };

      
    `};
  ${({ BackgroundWhite }) =>
    BackgroundWhite &&
    css`
      background-color: ${(g) => g.theme.color.button.whitePure};
      border-color: ${(g) => g.theme.color.button.whitePure};
    `};
  ${({ small }) =>
    small &&
    css`
      padding: ${getRelativeSize(5)} ${getRelativeSize(10)};
    `}
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${getRelativeSize(mTop)};
    `}
`;
