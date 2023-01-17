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
import ModalDetailScreen from "./ModalDetailScreen";

function StylingItemScreen({ route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [currentImg, setCurrentImg] = useState("");
  const image_list = [route.params.image_url].concat(route.params.sub_image);
  image_list.push(route.params.image_url);
  console.log("image list is :", image_list.length);

  const handleClick = (url) => {
    // setBgColor("white");
    setCurrentImg(url);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={image_list}
        // keyExtractor={(image_list) => image_list.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            // onPress={() => navigation.navigate("BoardDetail")}
            onPress={() => {
              handleAdd(item.id, image_url);
            }}
          >
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item }}
              />
              <View style={styles.iconContainer}>
                <View style={styles.closeIcon}>
                  <MaterialCommunityIcons
                    name="share"
                    color="white"
                    size={25}
                  />
                </View>

                <View style={styles.deleteIcon}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      handleClick(item);
                    }}
                  >
                    <Entypo name="add-to-list" color="white" size={25} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Screen>
            <Button title="^" onPress={() => setModalVisible(false)}></Button>
            <Text style={styles.modalText}>Save to</Text>
            <ModalDetailScreen
              closeModal={() => setModalVisible(false)}
              image_url={currentImg}
            />
          </Screen>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // width: "100%",
    // height: "92%",
    width: "100%",
    height: 600,
    marginTop: 30,
    // borderWidth: 3,
    // borderColor: "yellow",
  },
  iconContainer: {
    flexDirection: "row",
    // borderWidth: 3,
    // borderColor: "purple",
    justifyContent: "flex-end",
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
    // position: "absolute",
    // bottom: 20,
    // left: 30,
    // borderWidth: 3,
    // borderColor: "red",
    alignSelf: "flex-end",
  },
  deleteIcon: {
    // position: "absolute",
    // bottom: 20,
    // right: 30,
    paddingLeft: "80%",
    paddingRight: 13,
    borderWidth: 3,
    // borderColor: "green",
    // alignSelf: "center",
  },
  modalText: {
    fontSize: 15,
  },
  animation: {
    // borderWidth: 2,
    // borderColor: "red",
    width: 150,
  },
});

export default StylingItemScreen;
