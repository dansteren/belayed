import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default class Conversation extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Conversation</Text>
        <Link to="/home/explore">
          <Text>GO HOME</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
