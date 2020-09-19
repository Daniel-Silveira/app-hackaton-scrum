import React from "react";
import { Container, StyledButton } from "./styled";
import DefaultText from "../defaultText";
import PropTypes from "prop-types";

const Button = ({
  center,
  children,
  outline,
  loading,
  color,
  text,
  bold,
  type,
  flexEnd,
  onPress,
  ...rest
}) => {
  return (
    <Container center={center} flexEnd={flexEnd}>
      <StyledButton
        onPress={!loading && onPress}
        {...rest}
        loading
        outline={outline}
        color={color}
      >
        <DefaultText
          white={!outline}
          themeColor={color}
          bold={bold}
          //   type={type || "label"}
          text={text}
        />
      </StyledButton>
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  center: PropTypes.bool,
  loading: PropTypes.bool,
  circle: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.number,
  outline: PropTypes.bool,
  backcinz: PropTypes.bool,
  background: PropTypes.string,
  BackgroundWhite: PropTypes.bool,
};

export default Button;
