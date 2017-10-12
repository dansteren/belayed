import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppBar } from "../components";

export default class Explore extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <AppBar>Explore</AppBar>
        <Text>
          This screen will have all the climbs that are available. You will be
          able to filter based on day, time, and location.
        </Text>
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
