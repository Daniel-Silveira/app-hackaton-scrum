import { Platform, Dimensions } from "react-native";

export const getRelativeSize = (size) =>
  `${Platform.select({ ios: size, android: size })}px`;

export const getPercentageSizeWidth = (percentage) =>
  `${(Dimensions.get("window").width * percentage) / 100}px`;

export const getPercentageSizeHeight = (percentage) =>
  (Dimensions.get("window").height * percentage) / 100;

export const getPercentageSizeHeightNoPx = (percentage) =>
  (Dimensions.get("window").height * percentage) / 100;

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const formatedText = (text, max) => {
  return text.length > max ? `${text.slice(0, max)}...` : text;
};
