import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AppBar, ClimbingOp } from "../components";
import { opportunities } from "../services/api";

export default class Explore extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <AppBar>Explore</AppBar>
        <FlatList
          style={{ flex: 1 }}
          data={opportunities}
          renderItem={({ item }) => <ClimbingOp op={item} />}
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
