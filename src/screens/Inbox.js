import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { InboxItem, AppBar } from "../components";
import * as entangledb from "../services/entangledb";

export default class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      conversations: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.page}>
        <AppBar>Inbox</AppBar>
        <View>
          {this.state.conversations.map(c => (
            <InboxItem key={c.id} conversation={c} />
          ))}
        </View>
      </View>
    );
  }

  async fetchData(userId) {
    const { conversations } = await entangledb.query(entangledb.UserQuery);
    this.setState({ conversations });
  }
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1
  },
  header: {
    fontSize: 20
  }
});
