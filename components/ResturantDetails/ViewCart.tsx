import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from "react-redux";

export default function ViewCart({}) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  // const [activeTab, setActiveTab] = useState("Delivery");
  const items = useSelector((state) => state.cartreducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", " ")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log("total is", total);
  console.log("items are", items);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log("totalUSD are", totalUSD);
  const checkModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setIsVisibleModal(false)}>
            <Text style={{ color: "white" }}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        visible={isVisibleModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setIsVisibleModal(false);
        }}
      >
        {checkModalContent()}
      </Modal>

      {total ? (
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
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              onPress={() => setIsVisibleModal(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
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
