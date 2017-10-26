import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { grey700, primaryColor } from "../theme";

const BottomNavigation = ({ match, location }) => (
  <View style={styles.nav}>
    <Link to={`${match.url}/explore`} replace={true} style={styles.navItem}>
      <View style={styles.navItemBox}>
        <View style={styles.iconPlaceholderInactive} />
        <Text style={styles.textInactive}>Explore</Text>
      </View>
    </Link>
    <Link to={`${match.url}/inbox`} replace={true} style={styles.navItem}>
      <View style={styles.navItemBox}>
        <View style={styles.iconPlaceholderInactive} />
        <Text style={styles.textInactive}>Inbox</Text>
      </View>
    </Link>
    <Link to={`${match.url}/profile`} replace={true} style={styles.navItem}>
      <View style={styles.navItemBox}>
        <View style={styles.iconPlaceholderInactive} />
        <Text style={styles.textInactive}>Profile</Text>
      </View>
    </Link>
  </View>
);

export default BottomNavigation;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    elevation: 8,
    height: 56
  },
  navItem: {
    flexGrow: 1
  },
  navItemBox: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  iconPlaceholderActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: primaryColor
  },
  iconPlaceholderInactive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: grey700
  },
  textActive: {
    fontSize: 14,
    color: primaryColor
  },
  textInactive: {
    fontSize: 12,
    color: grey700
  }
});
