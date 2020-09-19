import { getRelativeSize } from "./src/utils";

const colors = {
  primary: "#000",
  whitePure: "#ffffff",
  black: "#000000",
  input: "#C4C4C4",
  transparent: "transparent",
};

const theme = {
  color: {
    general: { ...colors },
    text: { ...colors },
    button: { ...colors },
    input: { ...colors },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 50,
    ball: 200,
  },
  space: {
    small: 6,
    medium: 12,
    large: 16,
  },
  text: {
    display: getRelativeSize(34),
    title1: getRelativeSize(28),
    title2: getRelativeSize(22),
    subtitle: getRelativeSize(20),
    headline: getRelativeSize(17),
    body: getRelativeSize(16),
    label: getRelativeSize(14),
    caption: getRelativeSize(12),
  },
};

export default theme;
