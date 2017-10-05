import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const TabButtons = ({ match }) => (
  <View style={styles.nav}>
    <Link
      to={`${match.url}/explore`}
      replace={true}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text>Explore</Text>
    </Link>
    <Link
      to={`${match.url}/climbs`}
      replace={true}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text>Climbs</Text>
    </Link>
    <Link
      to={`${match.url}/topics`}
      replace={true}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text>Topics</Text>
    </Link>
    <Link
      to={`${match.url}/profile`}
      replace={true}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text>Profile</Text>
    </Link>
  </View>
);

export default TabButtons;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 20
  }
});
