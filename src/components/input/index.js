import React, { useState } from "react";
import { BoxInput, Remove, StyledInput, BoxRequire } from "./styled";
import PropTypes from "prop-types";
import { MaterialIcons } from "@expo/vector-icons";
import DefaultText from "../defaultText";

const Input = ({
  icon,
  noBackground,
  width,
  disabled,
  error,
  require,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <BoxInput width={width} focus={focus} error={error} {...rest}>
      <StyledInput
        focus={focus}
        editable={!disabled}
        placeholderTextColor={error ? "#EE2737" : "#818D97"}
        require={require}
        {...rest}
      />
      {focus ? (
        <Remove>
          <MaterialIcons name="close" size={15} color="#fff" />
        </Remove>
      ) : (
        require && (
          <BoxRequire>
            <DefaultText text="Required" themeColor="primary" />
          </BoxRequire>
        )
      )}
    </BoxInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  mBottom: PropTypes.bool,
  mTop: PropTypes.bool,
  vertical: PropTypes.bool,
  width: PropTypes.number,
  error: PropTypes.bool,
  noRadiusLeft: PropTypes.bool,
  noBackground: PropTypes.bool,
  BackgroundCin: PropTypes.bool,
  require: PropTypes.bool,
};

export default Input;
