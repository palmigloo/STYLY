import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Button,
} from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import StyleQ from "../components/StyleQ";

const listings = [
  {
    id: 1,
    left: "Formal ",
    right: "Casual",
  },
  {
    id: 2,
    left: "Pattern",
    right: "Plain  ",
  },
  {
    id: 3,
    left: " Beach",
    right: " Garden ",
  },
  {
    id: 4,
    left: " Fitted   ",
    right: "Relaxed",
  },
  {
    id: 5,
    left: " Maxi  ",
    right: "Minimal",
  },
  {
    id: 6,
    left: "Vintage",
    right: "Modern ",
  },
  {
    id: 7,
    left: "Working",
    right: "Nightout",
  },
  // {
  //   id: 8,
  //   left: "Monochrome",
  //   right: "Colorful",
  // },
  {
    id: 9,
    left: "Sequin",
    right: "Linen",
  },
];

function StylingQuestionScreen({ title, navigation }) {
  // console.log(Dimensions.get("screen"));
  // const picture = route.params;
  return (
    <Screen style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.text}>A quick QUIZ to get you started!</Text>
      </View>

      <View
        style={{
          // borderTopColor: "grey",
          // borderTopWidth: 0.5,
          flex: 3,
          paddingTop: 20,
        }}
      >
        <FlatList
          data={listings}
          keyExtractor={(listings) => listings.id.toString()}
          // numColumns={2}
          renderItem={({ item }) => (
            <StyleQ left={item.left} right={item.right} />
          )}
        />
      </View>
      <View style={{ flex: 0.5 }}>
        <AppButton
          title={"Get STYLEd"}
          onPress={() => navigation.navigate("StylingResult")}
        ></AppButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    // borderColor: "grey",
    // borderWidth: 0.5,
    height: "100%",
    width: "95%",

    // flexDirection: "row",
    justifyContent: "center", // primary
    alignItems: "center", // secondary
  },
  text: {
    padding: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
});
export default StylingQuestionScreen;
