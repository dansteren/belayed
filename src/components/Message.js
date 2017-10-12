import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "../utils";
import Avatar from "./Avatar";

const Message = ({ sender, timeSent, text, children, outbound }) => (
  <View style={styles.messageContainer}>
    {outbound ? (
      <View>
        <View style={styles.outboundMessage}>
          <Text style={styles.text}>{text || children}</Text>
        </View>
        <Text style={styles.timeOut}>{formatTime(timeSent)}</Text>
      </View>
    ) : (
      <View>
        <View style={styles.messageAndAvatar}>
          <Avatar text={sender} />
          <View style={styles.inboundMessage}>
            <Text style={styles.inboundMessageText}>{text || children}</Text>
          </View>
        </View>
        <Text style={styles.timeIn}>{formatTime(timeSent)}</Text>
      </View>
    )}
  </View>
);
export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 10
  },
  outboundMessage: {
    backgroundColor: "#FFFFFF",
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 100,
    borderRadius: 20,
    padding: 10
  },
  inboundMessage: {
    backgroundColor: "#CF5300",
    marginTop: 5,
    marginRight: 100,
    marginBottom: 5,
    marginLeft: 10,
    borderRadius: 20,
    padding: 10
  },
  messageAndAvatar: {
    flexDirection: "row",
    alignItems: "center"
  },
  inboundMessageText: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  text: {
    fontSize: 16
  },
  timeOut: {
    fontSize: 12,
    paddingLeft: 300
  },
  timeIn: {
    fontSize: 12,
    paddingLeft: 20
  },
  sender: {
    fontSize: 12
  }
});
