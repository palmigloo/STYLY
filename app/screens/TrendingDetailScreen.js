import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import Screen from "../components/Screen";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

// const listings = [
//   {
//     id: 1,
//     image: require("../assets/trending/t1.png"),
//   },
//   {
//     id: 2,
//     image: require("../assets/trending/t2.png"),
//   },
//   {
//     id: 3,
//     image: require("../assets/trending/t3.png"),
//   },
//   {
//     id: 4,
//     image: require("../assets/trending/t4.png"),
//   },
//   {
//     id: 5,
//     image: require("../assets/trending/t5.png"),
//   },
//   {
//     id: 6,
//     image: require("../assets/trending/t6.png"),
//   },
//   {
//     id: 7,
//     image: require("../assets/trending/t7.png"),
//   },
// ];

function TrendingDetailScreen({
  onPress,
  color = "primary",
  route,
  navigation,
}) {
  const eventRef = collection(db, "events");
  // const [urls, setUrls] = useState([]);

  // useEffect(() => {
  //   const  = async () => {
  //     const querySnapshot = await getDocs(eventRef);
  //     querySnapshot.forEach((doc) => {
  //       console.log("doc is is :", doc.id, doc.data());
  //     });
  //   };

  //   getEvents();
  // }, []);
  const urls = route.params.detail_url;
  // console.log("route params is : ", urls);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={urls}
        showsVerticalScrollIndicator={false}
        keyExtractor={(urls) => urls.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("TrendingItem", item)}
          >
            <Image style={styles.image} source={{ uri: item.url }} />
          </TouchableWithoutFeedback>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: "50%",
    height: 350,
    margin: 5,
  },
});
export default TrendingDetailScreen;
