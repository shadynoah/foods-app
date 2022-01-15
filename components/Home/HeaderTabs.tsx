import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderTabs({ setActiveTab, activeTab }) {
  // const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.headerView}>
      <HeaderButton
        title={"Delivery"}
        btnColor={"black"}
        txtColor={"white"}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <HeaderButton
        title={"Pickup"}
        btnColor={"white"}
        txtColor={"black"}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </View>
  );
}

type Props = {
  title: string;
  onPress: Function;
  btnColor: string;
  txtColor: string;
  setActiveTab: Function;
  activeTab: string;
};
const HeaderButton = ({
  title,
  onPress,
  btnColor,
  txtColor,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.headerBtn,
        backgroundColor: title === activeTab ? "black" : "white",
      }}
      onPress={() => {
        setActiveTab(title);
      }}
    >
      <Text
        style={{
          ...styles.headerBtnTxt,
          color: title === activeTab ? "white" : "black",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  headerBtn: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  headerBtnTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
});
