import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResturantItem({ resturantsData, navigation }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        {resturantsData &&
          resturantsData.map((resuturant, index) => {
            return (
              <View key={index}>
                <ResturantImage imageUri={resuturant.image_url} />
                <ResturantInfo
                  name={resuturant.name}
                  rating={resuturant.rating}
                />
              </View>
            );
          })}
      </View>
    </TouchableOpacity>
  );
}

const ResturantImage = ({ imageUri }) => {
  return (
    <>
      <Image
        source={{
          uri: imageUri,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};
const ResturantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>50 -45</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
