import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import Screen from "../components/Screen";
import StylingResultItem from "../components/StylingResultItem";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

import {
  createBoard,
  getStylingLooks,
  deleteBoard,
  getBoardsDB,
} from "../db/query";

function StylingResultScreen({ navigation }) {
  // console.log(Dimensions.get("screen"));
  // const picture = route.params;
  const eventRef = collection(db, "events");
  const [stylinglooks, setStylinglooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let looks = await getStylingLooks();
      setStylinglooks(looks);
    };

    fetchData();
  }, []);

  const refreshLog = () => {
    console.log("im testing the refresh");
  };

  return (
    <Screen style={styles.container}>
      {/* <ScrollView horizontal={true}> */}
      <FlatList
        data={stylinglooks}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(stylinglooks) => stylinglooks.id.toString()}
        // numColumns={2}
        renderItem={({ item }) => {
          //console.log("item is : ", item);
          return (
            <StylingResultItem
              stylingInfo={item}
              onPress={() => navigation.navigate("StylingItem", item)}
            />
          );
        }}
      />
      {/* </ScrollView> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    // borderColor: "red",
    // borderWidth: 3,
    height: "100%",

    // flexDirection: "row",
    justifyContent: "center", // primary
    alignItems: "center", // secondary
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "grey",
  },
});
export default StylingResultScreen;

// const listings = [
//   {
//     id: 1,
//     image_url: require("../assets/styling/s1.jpg"),
//     list: [
//       require("../assets/styling/s13.jpg"),
//       require("../assets/styling/s16.jpeg"),
//       require("../assets/styling/s14.jpeg"),
//       require("../assets/styling/s11.jpg"),
//     ],
//     title: "Look 1",
//     subtitle: "Ready for the new WHITE",
//   },
//   {
//     id: 2,
//     image_url: require("../assets/styling/s3.png"),
//     list: [
//       require("../assets/styling/s31.png"),
//       require("../assets/styling/s32.png"),
//       require("../assets/styling/s33.png"),
//       require("../assets/styling/s34.png"),
//     ],
//     title: "Look 2",
//     subtitle: "Preppy is never leaving",
//   },
// ];
