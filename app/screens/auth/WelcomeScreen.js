import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/ysl.webp")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tageline}>Find your ultimate style</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={"Login"}></AppButton>
        <AppButton title={"Register"} color="secondary"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 170,
    alignItems: "center",
  },
  tageline: {
    fontSize: 25,
    color: "white",
    fontWeight: "600",
    paddingVertical: 50,
  },
  buttonContainer: {
    padding: 20,
    width: "50%",
  },
});

export default WelcomeScreen;
