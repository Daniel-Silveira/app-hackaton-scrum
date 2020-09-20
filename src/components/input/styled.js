import styled, { css } from "styled-components";
import { getRelativeSize, getPercentageSizeWidth } from "../../utils";
import { Platform } from "react-native";

export const StyledInput = styled.TextInput`
  width: 95%;
  ${({ require, focus }) =>
    require &&
    !focus &&
    css`
      width: 80%;
    `}
`;

export const Remove = styled.TouchableOpacity`
  width: ${getRelativeSize(20)};
  height: ${getRelativeSize(20)};
  border-radius: 100px;
  background-color: ${(g) => g.theme.color.general.greyLight};
  align-items: center;
  justify-content: center;
`;

export const BoxRequire = styled.View`
  border-width: 1px;
  border-radius: 5px;
  padding: 0 ${getRelativeSize(4)};
  border-color: ${(g) => g.theme.color.general.primary};
`;

export const BoxInput = styled.View`
  padding: ${getRelativeSize(Platform.OS === "ios" ? 15 : 10)};
  border-radius: ${(g) => g.theme.radius.medium};
  background-color: #efefef;
  width: ${getPercentageSizeWidth(90)};
  flex-direction: row;
  align-items: center;
  ${({ focus }) =>
    focus &&
    css`
      border-left-width: ${getRelativeSize(8)};
      border-color: #7e7ef0;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
  ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${(g) => getRelativeSize(g.theme.space.medium)};
    `}
    ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${(g) => getRelativeSize(g.theme.space.medium)};
    `}
    ${({ vertical }) =>
    vertical &&
    css`
      margin-top: ${(g) => getRelativeSize(g.theme.space.large)};
      margin-bottom: ${(g) => getRelativeSize(g.theme.space.large)};
    `}
    ${({ error }) =>
    error &&
    css`
      background-color: ${(g) => g.theme.color.input.cardError};
      color: ${(g) => g.theme.color.input.textError};
    `}
    ${({ noRadiusLeft }) =>
    noRadiusLeft &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
    ${({ noBackground }) =>
    noBackground &&
    css`
      background-color: ${(g) => g.theme.color.input.input};
      border-color: ${(g) => g.theme.color.input.input};
    `};
  ${({ BackgroundCin }) =>
    BackgroundCin &&
    css`
      background-color: ${(g) => g.theme.color.input.greyLighter};
      border-color: ${(g) => g.theme.color.input.greyLighter};
    `};
`;
