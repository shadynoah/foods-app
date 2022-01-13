import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon = ({ name, color, text }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={name}
          size={25}
          style={{
            marginBottom: 5,
            alignSelf: "center",
            marginTop: 5,
          }}
        />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
