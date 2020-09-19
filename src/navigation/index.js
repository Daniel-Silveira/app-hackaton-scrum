import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Constants from "expo-constants";
import Initial from "../screens/initial";
import Cards from "../screens/cadsScreen";
import { getPercentageSizeHeightNoPx } from "../utils";
import Modal from "../components/modal";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#fff",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          options={defaultOptions}
          component={Initial}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{
            ...TransitionPresets.ModalPresentationIOS,
            gestureDirection: "vertical",
            gestureEnabled: true,
            transparentCard: true,
            cardStyle: { backgroundColor: "transparent" },
            gestureResponseDistance: {
              vertical: getPercentageSizeHeightNoPx(50),
            },
          }}
        />
        <Stack.Screen name="Cards" options={defaultOptions} component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
