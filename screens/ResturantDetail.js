import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/ResturantDetails/About";
import MenuItem from "../components/ResturantDetails/MenuItems";
import ViewCart from "../components/ResturantDetails/ViewCart";

export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 10 }} />
      <MenuItem />
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </View>
  );
}
