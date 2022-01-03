import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Categories() {
  const Items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick Up",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "coffee and tea",
    },
  ];
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Items.map((item, index) => {
          return (
            <View key={index} style={{ marginRight: 30, alignItems: "center" }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
