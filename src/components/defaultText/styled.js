import styled, { css } from "styled-components";
import { getPercentageSizeHeight, getPercentageSizeWidth } from "../../utils";

export const StyledText = styled.Text`
  ${({ type }) =>
    type &&
    css`
      font-size: ${(g) => g.theme.text[type]};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}
  ${({ vertical }) =>
    vertical &&
    css`
      margin: ${getPercentageSizeHeight(vertical)}px 0;
    `}
  ${({ themeColor }) =>
    themeColor &&
    css`
      color: ${(g) => g.theme.color.text[themeColor]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${mBottom};
    `}
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${mTop};
    `}
  ${({ mLeft }) =>
    mLeft &&
    css`
      margin-left: ${mLeft};
    `}
  ${({ alignSelf }) =>
    alignSelf &&
    css`
      align-self: ${alignSelf};
    `}
  ${({ positionAbsolute }) =>
    positionAbsolute &&
    css`
      position: absolute;
      background-color: #fff;
    `}
`;
