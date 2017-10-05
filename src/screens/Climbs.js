import React from "react";
import { StyleSheet, Text } from "react-native";

export default class ClimbsScreen extends React.Component {
  render() {
    return (
      <Text style={styles.header}>Climbs</Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});
