import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { Avatar } from "../components";
import { formatTime } from "../utils";

const InboxItem = ({ contactName, contactImage, threadId, messages }) => (
  <View style={styles.inboxItemRow}>
    <Avatar text={contactName} imageUrl={contactImage} />
    <Link to={`/conversation/${threadId}`} style={styles.inboxItem}>
      <View>
        <Text style={styles.name}>{contactName}</Text>
        <Text>
          {messages.length > 0
            ? messages[messages.length - 1].text
            : "New Conversation"}
        </Text>
        <Text style={styles.time}>
          {messages.length > 0
            ? formatTime(messages[messages.length - 1].timeSent)
            : "Tap to Start"}
        </Text>
      </View>
    </Link>
  </View>
);
export default InboxItem;

const styles = StyleSheet.create({
  inboxItemRow: {
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  inboxItem: {
    marginLeft: 16,
    flexGrow: 2
  },
  name: {
    fontSize: 16
  },
  time: {
    fontSize: 14,
    color: "#607D8B"
  }
});
