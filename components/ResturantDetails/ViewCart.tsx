import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
export default function ViewCart({}) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  // const [activeTab, setActiveTab] = useState("Delivery");
  const { items, resturantName } = useSelector(
    (state) => state.cartreducer.selectedItems
  );
  console.log("all items", items);
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
  const style = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      height: "auto",
      padding: 16,
      borderWidth: 1,
    },
    modalCheckoutButton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subTotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
  });
  const checkModalContent = () => {
    return (
      <View style={style.modalContainer}>
        <View style={style.modalCheckoutContainer}>
          <Text style={style.restaurantName}>{resturantName}</Text>
          {items.map((item, index) => {
            return <OrderItem key={index} item={item} />;
          })}
          <View style={style.subtotalContainer}>
            <Text style={style.subTotalText}>Subtotal</Text>
            <Text>{totalUSD}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                borderRadius: 30,
                position: "relative",
                paddingHorizontal: 100,
                paddingVertical: 10,
              }}
              onPress={() => {
                setIsVisibleModal(false);
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>CheckOut</Text>
              <Text
                style={{
                  color: "white",
                  position: "absolute",
                  right: 10,
                  top: 15,
                }}
              >
                {total ? totalUSD : ""}
              </Text>
            </TouchableOpacity>
          </View>
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
