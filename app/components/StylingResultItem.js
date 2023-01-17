import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import ImageList from "./ImageList";

function StylingResultItem({ stylingInfo, onPress }) {
  const [selection, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{stylingInfo.title}</Text>
      <Text style={styles.subtext}>{stylingInfo.subtitle}</Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.bigImage}
          source={{ uri: stylingInfo.image_url }}
        />
      </TouchableWithoutFeedback>
      <View style={styles.listContainer} onPress={onPress}>
        <ImageList list_urls={stylingInfo.sub_image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // borderWidth: 3,
    // borderColor: "yellow",
  },
  text: {
    flex: 0.2,
    color: "black",
    fontSize: 20,
    // borderWidth: 3,
    // borderColor: "red",
  },
  subtext: {
    fontSize: 12,
  },
  bigImage: {
    flex: 3,
    width: "70%",
    height: "50%",
    margin: 10,
    // borderWidth: 3,
    // borderColor: "blue",
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export default StylingResultItem;
