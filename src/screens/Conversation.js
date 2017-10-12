import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as entangledb from "../services/entangledb";
import { AppBar, Message } from "../components";

export default class Conversation extends React.Component {
  constructor() {
    super();
    this.state = {
      participants: ["no", "one"],
      messages: [
        {
          sender: "Fake Person",
          timeSent: 1507249095704,
          text: "Loading messages..."
        }
      ]
    };
  }

  componentWillMount() {
    this.fetchData(this.props.match.params.threadId);
  }

  render() {
    const m = this.state.messages[0];
    const self = "You";
    return (
      <View style={styles.page}>
        <AppBar>{this.state.participants[0]}</AppBar>
        <View style={styles.messages}>
          {this.state.messages.map(m => {
            return (
              <Message
                key={m.timeSent}
                sender={m.sender}
                timeSent={m.timeSent}
                text={m.text}
                outbound={m.sender === self}
              />
            );
          })}
        </View>
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
