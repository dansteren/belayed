import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { grey500, bluegrey400, bluegrey700, clear } from "../theme";

export default class TextMessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 50
    };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: 50,
          height: this.state.height + 32,
          elevation: 8,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <View style={styles.textInput}>
          <TextInput
            autoCapitalize="sentences"
            autoGrow={true}
            multiline={true}
            onChangeText={text => this.props.onChangeText({ text })}
            placeholder="Type a message"
            placeholderTextColor={bluegrey700}
            returnKeyType="send"
            style={{
              flexGrow: 1,
              height: this.state.height
            }}
            underlineColorAndroid={clear}
            value={this.state.newMessage}
            onContentSizeChange={e =>
              this.setState({ height: e.nativeEvent.contentSize.height })}
          />
        </View>
        <View style={styles.sendIconPlaceHolderContainer}>
          <View style={styles.sendIconPlaceHolder} />
          <Text style={styles.send}>SEND</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: 16,
    flexGrow: 1
  },
  sendIconPlaceHolderContainer: {
    marginRight: 16,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  sendIconPlaceHolder: {
    backgroundColor: bluegrey400,
    width: 24,
    height: 24
  },
  send: {
    fontSize: 10,
    color: bluegrey400,
    fontWeight: "bold",
    marginBottom: 4
  }
});
