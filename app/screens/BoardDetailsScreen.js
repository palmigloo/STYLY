import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Alert,
} from "react-native";
import Screen from "../components/Screen";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { createBoard, deleteBoard, getBoardsDB } from "../db/query";

function BoardDetailsScreen({ color = "primary", navigation, route }) {
  useEffect(() => {
    const fetchData = async () => {
      let boards = await getBoardsDB();
      console.log("boars info is : ", boards);
      setImages(boards.detail_url);
    };

    fetchData();
  }, []);

  const [images, setImages] = useState([]);
  const urls = route.params.detail_url;

  const [showDelete, setShowDelete] = useState(false);

  // const addBoard = () => {
  //   Alert.prompt(
  //     "Create a new board",
  //     [
  //       {
  //         text: "Submit",
  //         onPress: (text) => setBoardName(text),
  //       },
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("cancled"),
  //       },
  //     ],
  //     "plain-text",
  //     "Board name"
  //   );
  // };

  return (
    <Screen style={styles.screen}>
      {/* <ImageBackground
        source={require("../assets/t1.jpeg")}
        style={{
          // width: "30%",
          // height: "30%",
          borderWidth: 2,
          borderColor: "red",
        }}
      >
        <Text>Inside</Text>
      </ImageBackground> */}
      <View style={styles.headerContainer}>
        <Text
          style={{
            flex: 2,
            alignSelf: "center",
          }}
        >
          {/* {title} */}
          {route.params.title}
        </Text>
        <View
          style={{
            flex: 0.4,
            // borderWidth: 3,
            // borderColor: "green",
          }}
        >
          <>
            {showDelete && (
              <TouchableWithoutFeedback onPress={() => setShowDelete(false)}>
                {/* <Feather name="edit" color="black" size={18} /> */}

                {showDelete && <Text>Cancle</Text>}
              </TouchableWithoutFeedback>
            )}
          </>
        </View>
        {/* <View
          style={{
            flex: 0.2,
            // borderWidth: 3,
            // borderColor: "green",
          }}
        >
          <TouchableWithoutFeedback onPress={addBoard}>
            <Ionicons name="add" color="black" size={18} />
          </TouchableWithoutFeedback>
        </View> */}
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
      </View>
      <FlatList
        // contentContainerStyle={{
        //   flex: 1,
        // }}
        data={urls}
        showsVerticalScrollIndicator={false}
        // keyExtractor={(urls) => urls.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("BoardDetail")}
          >
            <View
              style={{
                flexDirection: "column",
              }}
            >
              {/* <TouchableWithoutFeedback onPress={() => setListing([])}> */}
              {showDelete && (
                <MaterialCommunityIcons
                  name="selection-ellipse-remove"
                  color="red"
                  size={25}
                />
              )}
              {/* </TouchableWithoutFeedback> */}

              <Image style={styles.image} source={{ uri: item }} />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    // width: "30%",
    width: 180,
    height: 230,

    margin: 5,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  screen: {
    // flex: 1,
    padding: 20,
    // borderWidth: 3,
    // borderColor: "red",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  headerContainer: {
    // flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
    // borderWidth: 3,
    // borderColor: "purple",
  },
});
export default BoardDetailsScreen;
