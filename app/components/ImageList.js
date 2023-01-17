import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  View,
  Image,
  Switch,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

function ImageList({ list_urls, onClick }) {
  console.log("list in the image list is :", list_urls);
  return (
    <View style={styles.container}>
      {list_urls.map((url, index) => {
        return (
          <TouchableWithoutFeedback onPress={onClick}>
            <Image style={styles.image} source={{ uri: url }}></Image>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    width: 350,
    justifyContent: "space-evenly",
    // alignItems: "center",
    padding: 5,
    // borderWidth: 3,
    // borderColor: "orange",
  },
  image: {
    flex: 1,
    padding: 5,
    color: "black",
    width: 90,
    height: 140,
    margin: 5,
    // borderWidth: 3,
    // borderColor: "purple",
  },
});
export default ImageList;
