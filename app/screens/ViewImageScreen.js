import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ModalDetailScreen from "./ModalDetailScreen";
import LottieView from "lottie-react-native";
// import LottieView from "lottie-react-native";

function ViewImageScreen({ image_url }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = () => {
    setBgColor("white");
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="share" color="white" size={20} />
      </View>
      <View style={styles.deleteIcon}>
        <TouchableWithoutFeedback onPress={handleClick}>
          <Entypo name="add-to-list" color="white" size={20} />
        </TouchableWithoutFeedback>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/styling/s1.jpg")}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Screen>
            <Button title="^" onPress={() => setModalVisible(false)}></Button>
            <Text style={styles.modalText}>Save to</Text>
            <ModalDetailScreen closeModal={() => setModalVisible(false)} />
          </Screen>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "92%",
    // borderWidth: 3,
    // borderColor: "yellow",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    // borderWidth: 3,
    // borderColor: "red",
  },
  // style={{
  //   height: "30%",
  //   marginTop: "auto",
  //   // backgroundColor: "rgba(0, 0, 0, 0.8)",
  //   backgroundColor: "white",
  // }}
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 3,
    // borderColor: "red",
    height: "33%",
    marginTop: "auto",
    // backgroundColor: "rgba(0, 0, 0, 0.8)",
    backgroundColor: "white",
  },
  closeIcon: {
    position: "absolute",
    bottom: 20,
    left: 30,
    // borderWidth: 3,
    // borderColor: "red",
  },
  deleteIcon: {
    position: "absolute",
    bottom: 20,
    right: 30,
    // borderWidth: 3,
    // borderColor: "green",
  },
  modalText: {
    fontSize: 15,
  },
  animation: {
    borderWidth: 2,
    borderColor: "red",
    width: 150,
  },
});

export default ViewImageScreen;
