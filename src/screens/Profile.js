import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { statusBarHeight } from "../dimens";
import { primaryTextDark, grey500, grey700 } from "../theme";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.bannerImagePlaceholder} />
        <View style={styles.profileImagePlaceholder} />
        <View style={styles.content}>
          <Text style={styles.header}>Dan Steren</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1
  },
  bannerImagePlaceholder: {
    backgroundColor: grey700,
    height: 200
  },
  profileImagePlaceholder: {
    backgroundColor: grey500,
    alignSelf: "center",
    elevation: 4,
    height: 150,
    width: 150,
    position: "relative",
    top: -75,
    borderRadius: 75
  },
  content: {
    flexGrow: 1
  },
  header: {
    fontSize: 32,
    alignSelf: "center",
    color: primaryTextDark
  }
});
