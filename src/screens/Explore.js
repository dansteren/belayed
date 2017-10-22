import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AppBar, ClimbingOp, HorizontalList } from "../components";
import { weekdays } from "../services/api";

export default class Explore extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <AppBar>Explore</AppBar>
        <FlatList
          style={{ flex: 1 }}
          data={weekdays}
          renderItem={({ item }) => (
            <HorizontalList title={item.day} data={item.people} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1
  }
});
