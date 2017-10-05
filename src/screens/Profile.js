import React from "react";
import { StyleSheet, Text } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <Text style={styles.header}>Profile</Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});
