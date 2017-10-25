import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primaryColor, primaryTextLight, opacity54 } from "../theme";

const Avatar = ({ text }) => (
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>{text.charAt(0)}</Text>
  </View>
);
export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    fontSize: 26,
    color: opacity54(primaryTextLight)
  }
});
