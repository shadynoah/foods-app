import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResturantItem() {
  return (
    <View>
      <ResturantItem />
    </View>
  );
}

const ResturantImage = () => {
  <>
    <Image
      source={{
        uri: "https://media.gettyimages.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?s=612x612",
      }}
      style={{ width: "100%", height: 180 }}
    />
    ;
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color="gray"
        style={{ position: "absolute", right: 20, top: 0 }}
      />
    </TouchableOpacity>
  </>;
};
const ResturantInfo = () => {
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>family</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>50 -45</Text>
    </View>
    <View style={{ backgroundColor: "#eee", height: 30, width: 30 }}>
      <Text>4.5</Text>
    </View>
  </View>;
};
