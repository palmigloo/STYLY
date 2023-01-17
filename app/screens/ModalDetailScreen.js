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
  Alert,
} from "react-native";
import colors from "../config/colors";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { createBoard, deleteBoard, getBoardsDB, addToBoard } from "../db/query";

// const listings = [
//   {
//     id: 1,
//     cover_url: require("../assets/styling/s1.jpg"),
//     board_name: "Shopping list",
//   },
//   {
//     id: 2,
//     cover_url: require("../assets/trending/t3.png"),
//     board_name: "White shirts",
//   },
//   {
//     id: 3,
//     cover_url: require("../assets/trending/t2.png"),
//     board_name: "Total look",
//   },
// ];

function ModalDetailScreen({ closeModal, image_url }) {
  const eventRef = collection(db, "events");
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list_boards = await getBoardsDB();
      setBoards(list_boards);
    };

    fetchData();
  }, []);

  async function handleAdd(board_id, image_url) {
    Alert.alert("Picture added to the board", "", [
      {
        text: "OK",
        onPress: closeModal,
        // style: "cancel",
      },
    ]);
    await addToBoard(board_id, image_url);
  }

  // const createTwoButtonAlert = () =>
  //   Alert.alert("Picture added to the board", "", [
  //     {
  //       text: "OK",
  //       onPress: closeModal,
  //       // style: "cancel",
  //     },
  //   ]);

  return (
    <FlatList
      data={boards}
      horizontal={true}
      keyExtractor={(boards) => boards.id.toString()}
      // numColumns={2}
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
            <Image style={styles.image} source={{ uri: item.cover_url }} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    width: 350,
    justifyContent: "space-evenly",
    // alignItems: "center",
    padding: 20,
    // borderWidth: 3,
    // borderColor: "orange",
  },
  image: {
    // flex: 1,
    padding: 15,
    color: colors.white,
    width: 80,
    height: 120,
    margin: 10,
    // borderWidth: 3,
    // borderColor: "purple",
  },
  // text: {
  //   fontSize: 20,
  //   color: "black",
  // },
});
export default ModalDetailScreen;

{
  /* <View style={styles.container}>
<Image style={styles.image} source={require("../assets/t1.jpeg")}></Image>
<Image style={styles.image} source={require("../assets/t1.jpeg")}></Image>
<Image style={styles.image} source={require("../assets/t1.jpeg")}></Image>
<Image style={styles.image} source={require("../assets/t1.jpeg")}></Image>
</View> */
}
