import React from "react";
import { StyleSheet } from "react-native";
import RootNavigation from "./navigation";
export default function App() {
  return <RootNavigation />;
  // return <Home />;
  // return <ResturantDetail />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
