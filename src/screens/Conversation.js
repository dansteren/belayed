import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as entangledb from "../services/entangledb";
import { AppBar, Message } from "../components";

export default class Conversation extends React.Component {
  constructor() {
    super();
    this.state = {
      participants: [],
      messages: []
    };
  }

  componentWillMount() {
    this.fetchData(this.props.match.params.threadId);
  }

  componentDidMount() {
    if (this.flatList) {
      this.flatList.scrollToEnd({ animated: true }); // TODO: Doesn't work
    }
  }

  render() {
    const m = this.state.messages[0];
    const self = "You";
    return (
      <View style={styles.page}>
        <AppBar>{this.state.participants[0]}</AppBar>
        <FlatList
          style={{ flex: 1 }}
          ref={r => {
            this.flatList = r;
          }}
          contentContainerStyle={styles.messages}
          data={this.state.messages}
          getItemLayout={(data, index) => ({
            length: 60,
            offset: 80 * index,
            index
          })}
          keyExtractor={(item, index) => item.timeSent}
          renderItem={({ item }) => (
            <Message
              sender={item.sender}
              timeSent={item.timeSent}
              text={item.text}
              outbound={item.sender === self}
            />
          )}
        />
      </View>
    );
  }

  async fetchData(threadId) {
    const { participants, messages } = await entangledb.getConversation(
      threadId
    );
    this.setState({ participants, messages });
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#EEEEEE",
    flexGrow: 1
  },
  messages: {
    flexGrow: 1,
    justifyContent: "flex-end"
  }
});
