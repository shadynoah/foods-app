import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const image =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
const title = "title of resturant";
const description = "description of item 4 starts ⭐  (2999)";
export default function About({ route }) {
  const yelpResturantInfo = {
    name: "kitchen",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    reviews: "1500",
    categories: [
      { title: "Indian" },
      { title: "Comfort Foods" },
      { title: "Coffee" },
    ],
    rating: "4.0",
  };
  console.log("image is ", route.params);
  const { name, image, price, reviews, rating, categories } = route.params;
  const foramttedCategories = categories.map((cat) => cat.title).join(" . ");
  const description = `${foramttedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`; // const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantName name={name} />
      <ResturantDescription description={description} />
    </View>
  );
}
const ResturantImage = ({ image }) => {
  return (
    <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
  );
};
const ResturantName = ({ name }) => {
  return <Text style={styles.name}>{name}</Text>;
};
const ResturantDescription = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
});
