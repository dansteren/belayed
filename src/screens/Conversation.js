import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import * as entangledb from "../services/entangledb";
import { AppBar, Message, TextMessageInput } from "../components";
import { grey500, bluegrey50, clear } from "../theme";

export default class Conversation extends React.Component {
  constructor() {
    super();
    this.state = {
      participants: [],
      messages: [],
      newMessage: ""
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
      <KeyboardAvoidingView style={styles.page} behavior="padding">
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
        <TextMessageInput
          value={this.state.newMessage}
          onChangeText={newMessage => this.setState({ newMessage })}
          onSendClick={() => this.sendMessage()}
        />
      </KeyboardAvoidingView>
    );
  }

  async fetchData(threadId) {
    const { participants, messages } = await entangledb.getConversation(
      threadId
    );
    this.setState({ participants, messages });
  }

  sendMessage() {
    if (this.state.newMessage) {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            sender: "You",
            timeSent: Date.now(),
            text: this.state.newMessage
          }
        ],
        newMessage: ""
      });
    }
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: bluegrey50,
    flexGrow: 1
  },
  messages: {
    flexGrow: 1,
    justifyContent: "flex-end"
  }
});
