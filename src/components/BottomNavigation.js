import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const BottomNavigation = ({ match }) => (
  <View style={styles.nav}>
    <Link to={`${match.url}/explore`} replace={true} style={styles.navItem}>
      <Text>Explore</Text>
    </Link>
    <Link to={`${match.url}/climbs`} replace={true} style={styles.navItem}>
      <Text>Climbs</Text>
    </Link>
    <Link to={`${match.url}/inbox`} replace={true} style={styles.navItem}>
      <Text>Inbox</Text>
    </Link>
    <Link to={`${match.url}/profile`} replace={true} style={styles.navItem}>
      <Text>Profile</Text>
    </Link>
  </View>
);

export default BottomNavigation;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    elevation: 8
  },
  navItem: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20
  }
});
