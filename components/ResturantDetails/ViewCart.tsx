import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ViewCart({}) {
  // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        bottom: 5,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: "80%",
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
type Props = {
  food: {
    title: string;
    price: string;
    description: string;
    image: string;
  };
};
const FoodImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={{ width: 100, height: 100, borderRadius: 9 }}
    />
  );
};
const FoodInfo = ({ food }: Props) => {
  return (
    <View style={{ justifyContent: "space-evenly", width: 240 }}>
      <Text style={styles.title}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
});
