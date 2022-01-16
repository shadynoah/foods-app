import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";

export default function RootNavigation(params) {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false;
    }
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions} >
            <Stack.screen name="Home" Component={Home} />
            <Stack.screen name="ResturantDetail" Component={ResturantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}