import React from "react";
import { StyledText } from "./styled";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const DefaultText = (props) => {
  const { text, onPress, ...rest } = props;

  return !!onPress ? (
    <TouchableOpacity onPress={onPress}>
      <StyledText maxFontSizeMultiplier={1} {...rest}>
        {text}
      </StyledText>
    </TouchableOpacity>
  ) : (
    <StyledText maxFontSizeMultiplier={1} {...rest}>
      {text}
    </StyledText>
  );
};

DefaultText.propTypes = {
  text: PropTypes.string,
  bold: PropTypes.bool,
  white: PropTypes.bool,
  themeColor: PropTypes.string,
  width: PropTypes.number,
  vertical: PropTypes.number,
  align: PropTypes.oneOf(["left", "center", "right"]),
  type: PropTypes.string,
  onPress: PropTypes.func,
  positionAbsolute: PropTypes.bool,
  mBottom: PropTypes.number,
  mTop: PropTypes.number,
  mLeft: PropTypes.number,
};

export default DefaultText;
