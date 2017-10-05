import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Explore extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.header}>Explore</Text>
        <Text>
          This screen will have all the climbs that are available.
          You will be able to filter based on day, time, and location.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FF0000"
  },
  header: {
    fontSize: 20,
  }
});
