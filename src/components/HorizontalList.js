import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ProfileCard } from "../components";

const HorizontalList = ({ title, data }) => (
  <View style={styles.horizontalList}>
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seeAll}>See All ></Text>
    </View>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.cardContainer}
      data={data}
      renderItem={({ item }) => <ProfileCard person={item} />}
    />
  </View>
);
export default HorizontalList;

const styles = StyleSheet.create({
  horizontalList: {
    backgroundColor: "#EEEEEE",
    paddingTop: 10,
    paddingBottom: 10
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cardContainer: {
    flex: 1,
    paddingLeft: 20
  }
});
