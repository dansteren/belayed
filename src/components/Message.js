import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <View style={styles.inboundMessage}>
          <Text style={styles.inboundMessageText}>
            {sender || ""}: {text || children}
          </Text>
        </View>
        <Text style={styles.timeIn}>{formatTime(timeSent)}</Text>
      </View>
    )}
  </View>
);
export default Message;

/**
 * Converts a timestamp into the appropriate format for a message
 */
function formatTime(timestamp) {
  const weekInMS = 604800000;
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  let dayOfWeek;
  switch (day) {
    case 1:
      dayOfWeek = "Mon";
      break;
    case 2:
      dayOfWeek = "Tue";
      break;
    case 3:
      dayOfWeek = "Wed";
      break;
    case 4:
      dayOfWeek = "Thu";
      break;
    case 5:
      dayOfWeek = "Fri";
      break;
    case 6:
      dayOfWeek = "Sat";
      break;
    case 7:
      dayOfWeek = "Sun";
      break;
    default:
      console.log("We received an invalid time in our time converter");
      dayOfWeek = "";
      break;
  }
  let hours = dateObj.getHours();
  const period = hours > 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  }
  if ((hours = 0)) {
    hours = 12;
  }
  const minutes = dateObj.getMinutes();
  return `${dayOfWeek}, ${hours}:${minutes} ${period}`;
}

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
