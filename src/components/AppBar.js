import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primaryColor, primaryTextColor } from "../theme";
import { Link } from "react-router-native";
import { statusBarHeight } from "../dimens";

const AppBar = ({ children }) => (
  <View>
    <View style={styles.appBar}>
      <Link to="/home/explore">
        <Text style={styles.appBarText}>{children}</Text>
      </Link>
    </View>
  </View>
);
export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    height: 56 + statusBarHeight,
    backgroundColor: primaryColor,
    elevation: 4
  },
  appBarText: {
    fontSize: 24,
    color: primaryTextColor,
    margin: 0,
    marginTop: 14 + statusBarHeight,
    // marginLeft: 72 //Change this once we add a left icon
    marginLeft: 24
  }
});
