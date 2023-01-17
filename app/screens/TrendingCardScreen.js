import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

// const listings = [
//   {
//     id: 1,
//     title: "The Ultimate 2023 Trends",
//     desc: "The fashion trends for 2023 are all over the board. From a continuation of controversial low-rise options and an influx of too-sheer-for-work slip dresses to heavy leather skirts and delicate dip-dye, choose your own adventure” game plan. ",
//     image: require("../assets/trend.webp"),
//   },
//   {
//     id: 2,
//     title: "Lengths of Leather",
//     desc: "Leather jackets have been a mainstay on during fashion week for decades and this season was no exception. From mini to maxi, leather skirts swung down the runway at NYFW.",
//     image: require("../assets/trending/leatherskirts.webp"),
//   },
//   {
//     id: 3,
//     title: "High-Stakes, Low-Rise",
//     desc: "Low-rise suiting options were all over some of the most highly anticipated runways at NYFW including Tibi, Sandy Liang and Peter Do. The two-piece suit has been at the height of trends for the past two years and thankfully isn’t going anywhere.",
//     image: require("../assets/trending/lowrisesuiting.webp"),
//   },
//   {
//     id: 4,
//     title: "Sheer Genius",
//     desc: "Every so often, a trend from a singular show will spark a wave full of similar styles. In this case, the trend in question is sheer and the trendsetter is Fendi’s Fall/Winter 2022 collection. ",
//     image: require("../assets/trending/sheer.webp"),
//   },
//   {
//     id: 5,
//     title: "Total Tassels",
//     desc: "Remember when feathers bordered every sleeve and hemline? Well, they’ve officially been replaced by tassels and fringe. Tassel trim is traditionally neutral toned which makes it a great option for wardrobe minimalists and a wide range of designers. ",
//     image: require("../assets/trending/tassels.webp"),
//   },
// ];

function TrendingCardScreen({ navigation }) {
  const eventRef = collection(db, "trendingInfo");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      let cardlist = [];
      const querySnapshot = await getDocs(eventRef);
      querySnapshot.forEach((doc, index) => {
        // console.log("doc is is :", doc.id, doc.data());
        // let obj =
        cardlist.push(doc.data());
      });
      setCards(cardlist);
    };

    getCards();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={cards}
        showsVerticalScrollIndicator={false}
        keyExtractor={(cards) => cards.title.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.desc}
            image={item.image_url}
            onPress={() => navigation.navigate(routes.TRENDING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    color: "black",
    // backgroundColor: "grey",
  },
});
export default TrendingCardScreen;
