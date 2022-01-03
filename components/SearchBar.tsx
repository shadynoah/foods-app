import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import AntdesignIcon from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.searchView}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: styles.textInput,
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Icon name="location-sharp" size={30} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              padding: 8,
              backgroundColor: "white",
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <AntdesignIcon
              name="clockcircle"
              size={14}
              style={{ marginRight: 5 }}
            />
            <Text>search</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchView: {
    marginTop: 15,
    flexDirection: "row",
  },
  textInput: {
    color: "#5d5d5d",
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
