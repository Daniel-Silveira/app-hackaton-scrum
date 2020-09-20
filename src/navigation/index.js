import React, { useEffect, useState } from "react";
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
import { AsyncStorage } from "react-native";
import { requestAccessSuccess } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";
import RoomsScreen from "../screens/rooms";
import Room from "../screens/room";

const Stack = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();

  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#fff",
    },
  };

  useEffect(() => {
    AsyncStorage.getItem("user").then((res) => {
      dispatch(requestAccessSuccess({ user: JSON.parse(res) }));
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          options={defaultOptions}
          component={Initial}
        />
        <Stack.Screen name="Room" options={defaultOptions} component={Room} />
        <Stack.Screen
          name="Rooms"
          options={defaultOptions}
          component={RoomsScreen}
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
