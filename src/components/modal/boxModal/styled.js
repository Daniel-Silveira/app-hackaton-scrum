import styled, { css } from 'styled-components'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { getPercentageSizeWidth, getPercentageSizeHeight } from '../../../utils'

const shadowCard = {
  shadowColor: 'rgba(0,0,0, 1)',
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.25,
  shadowRadius: 8,
  elevation: 2,
  zIndex: 16,
}

export const BoxConfig = styled.View`
  justify-content: flex-end;
  width: ${getPercentageSizeWidth(100)};
  height: ${getPercentageSizeHeight(100)};
  min-width: ${getPercentageSizeWidth(100)};
  min-height: ${getPercentageSizeHeight(100)};
  flex-shrink: 0;
`
export const BackArea = styled.TouchableOpacity`
  flex: 1;
`

export const IconBox = styled.View.attrs({ ...shadowCard })`
  width: 100;
  align-items: center;
  height: 30;
  background-color: #eeeeee80;
  background-color: #fff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`

export const Icon = styled.View`
  width: 80px;
  height: 6px;
  border-radius: 16px;
  background-color: #ddd;
  margin-top: 10px;
`

export const Options = styled.View.attrs({ ...shadowCard })`
  width: ${getPercentageSizeWidth(100)};
  height: ${getPercentageSizeHeight(100) - getStatusBarHeight() - 80};
  background-color: #fff;
  align-items: center;
  border-top-right-radius: 25;
  border-top-left-radius: 25;
  ${({ height }) =>
    height &&
    css`
      height: ${getPercentageSizeHeight(height)};
    `}
`
