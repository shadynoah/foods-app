import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { Provider as ReducxProvider } from "react-redux";
// import store from "./redux/store";
import configureStore from "./redux/store";
const store = configureStore();
export default function RootNavigation(params) {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReducxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={ResturantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReducxProvider>
  );
}
