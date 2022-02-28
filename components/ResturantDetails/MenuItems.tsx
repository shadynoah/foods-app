import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

export default function MenuItem({ resturantName }) {
  // const [activeTab, setActiveTab] = useState("Delivery");
  const dispatch = useDispatch();
  const selectItem = (item: object, checkboxValue) =>
    dispatch({
      type: "Add-TO-CART",
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartreducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <View key={index} style={{ flexDirection: "row" }}>
            <View style={{ margin: 10, justifyContent: "center" }}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            </View>
            <View style={styles.MenuItem}>
              <FoodInfo food={food} />
              <FoodImage image={food.image} />
            </View>
            <Divider width={0.5} />
          </View>
        );
      })}
    </ScrollView>
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
