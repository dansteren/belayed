import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { statusBarHeight } from "../dimens";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.header}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "lightblue",
    flexGrow: 1,
    marginTop: statusBarHeight
  },
  header: {
    fontSize: 20
  }
});
