import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { Avatar } from "../components";
import { formatTime } from "../utils";

const InboxItem = ({ conversation }) => (
  <View style={styles.inboxItemRow}>
    <Avatar text={conversation.participants[0]} />
    <Link to={`/conversation/${conversation.id}`} style={styles.inboxItem}>
      <View>
        <Text style={styles.name}>{conversation.participants[0]}</Text>
        <Text>
          {conversation.messages[conversation.messages.length - 1].text ||
            "New Conversation"}
        </Text>
        <Text style={styles.time}>
          {formatTime(
            conversation.messages[conversation.messages.length - 1].timeSent
          )}
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
