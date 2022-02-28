import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import ResturantItem from "../components/Home/ResturantItem";
import SearchBar from "../components/Home/SearchBar";
import { localRestaurants } from "../components/Home/ResturantItem";
import { useState, useEffect } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/Home/BottomTabs";
export default function Home({ navigation }) {
  const YELP_API_KEY =
    "HNyX5KGLw72DDHtckRV2XsqLLZkS1uYOJ0UHP1z1YKbWJIk_-8CvHPXrWwmUI08DAiKlZElWhYWoOACkm6qHoObRF5-7MUwJr2-JZLA_LN4UtxkMgNrEYFfcLpTZYXYx";
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  console.log("activeTab is", activeTab);
  const [resturantsData, setRestaurantData] = useState(localRestaurants);
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `9QmlZshA8T_kO_jdRU7nOg`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
      apiOptions
    )
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  console.log("json.businesses");

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem
          resturantsData={resturantsData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={2} />
      <BottomTabs />
    </SafeAreaView>
  );
}
