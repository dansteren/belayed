import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default class Inbox extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Inbox</Text>
        <View>
          <Link to="/conversation/001" style={styles.message}>
            <Text>Conversation 001</Text>
          </Link>
          <Link to="/conversation/002" style={styles.message}>
            <Text>Conversation 002</Text>
          </Link>
          <Link to="/conversation/003" style={styles.message}>
            <Text>Conversation 003</Text>
          </Link>
          <Link to="/conversation/004" style={styles.message}>
            <Text>Conversation 004</Text>
          </Link>
          <Link to="/conversation/005" style={styles.message}>
            <Text>Conversation 005</Text>
          </Link>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  message: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFF00"
  }
});
