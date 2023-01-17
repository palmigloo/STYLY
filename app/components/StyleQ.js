import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Switch } from "react-native-switch";

function StyleQ({ left, right }) {
  const [selection, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{left}</Text>
      {/* <Switch value={true} circleSize={20} barHeight={20} /> */}
      <View style={styles.bar}>
        <Switch
          value={selection}
          onValueChange={(newValue) => setSelection(newValue)}
          trackColor={{ false: "red", true: "#a6b07e" }}
          ios_backgroundColor="black"
          circleSize={15}
          barHeight={3}
        />
      </View>

      <Text style={styles.text}>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    // borderColor: "red",
    // borderWidth: 3,
  },
  text: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: "black",
    // borderWidth: 3,
    // borderColor: "blue",
    fontStyle: "italic",
    // width: "100%",
    // height: 70,
    fontSize: 20,
  },
  bar: {
    padding: 10,
    // borderWidth: 3,
    // borderColor: "green",
  },
});
export default StyleQ;
