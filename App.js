import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import theme from "./theme";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux";

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
