import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Alert,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Screen from "../components/Screen";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { createBoard, deleteBoard, getBoardsDB } from "../db/query";

function BoardScreen({ title, onPress, color = "primary", navigation }) {
  // console.log(Dimensions.get("screen"));
  // const picture = route.params;
  const [boards, setBoards] = useState([]);
  const eventRef = collection(db, "boardInfo");
  const [boardName, setBoardName] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    console.log("refreshing");
    let new_boards = await getBoardsDB();
    setBoards(new_boards);
  }, []);

  useEffect(() => {
    const getBoards = async () => {
      const querySnapshot = await getDocs(eventRef);
      let boardllist = [];
      querySnapshot.forEach((doc) => {
        //console.log("board info  :", doc.id, doc.data());
        boardllist.push({ ...{ id: doc.id }, ...doc.data() });
      });
      setBoards(boardllist);
    };

    getBoards();
  }, []);

  const addBoard = () => {
    Alert.prompt("Create a new board", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: (text) => saveBoard(text) },
    ]);
  };

  // async function refresh() {
  //   let new_boards = await getBoardsDB();
  //   setBoards(new_boards);
  // }

  async function saveBoard(text) {
    console.log("text inserted : ", text);
    setBoardName(text);
    createBoard(text);
    let new_boards = await getBoardsDB();
    setBoards(new_boards);
  }

  async function handleDelete(board_id) {
    await deleteBoard(board_id);
    let new_boards = await getBoardsDB();
    setBoards(new_boards);
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            flex: 2,
            // borderWidth: 3,
            // borderColor: "yellow",
            alignSelf: "center",
          }}
        >
          MY BOARDS
        </Text>
        <View
          style={{
            flex: 0.2,
            // borderWidth: 3,
            // borderColor: "green",
          }}
        >
          <TouchableWithoutFeedback onPress={() => setShowDelete(!showDelete)}>
            <Feather name="edit" color="black" size={18} />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flex: 0.2,
            // borderWidth: 3,
            // borderColor: "yellow",
            alignSelf: "flex-end",
          }}
        >
          <TouchableWithoutFeedback onPress={addBoard}>
            <Ionicons name="ios-add" color="black" size={18} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        // scrollEnabled={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          contentContainerStyle={
            {
              // justifyContent: "flex-start",
              // flex: 1,
              // flexDirection: "row",
            }
          }
          data={boards}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(boards) => boards.title.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("BoardDetail", item)}
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                {showDelete && (
                  <TouchableWithoutFeedback
                    onPress={() => handleDelete(item.id)}
                  >
                    <MaterialCommunityIcons
                      name="selection-ellipse-remove"
                      color="red"
                      size={25}
                    />
                  </TouchableWithoutFeedback>
                )}
                <Image style={styles.image} source={{ uri: item.cover_url }} />
                <Text>{item.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 7,
    width: 165,
    height: 260,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  screen: {
    // flex: 1,
    padding: 20,
    // borderWidth: 3,
    // borderColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerContainer: {
    // flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth: 3,
    // borderColor: "purple",
  },
});
export default BoardScreen;
