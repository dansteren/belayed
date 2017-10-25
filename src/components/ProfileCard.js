import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const ProfileCard = ({ person }) => (
  <Link to={`/user/${person.id}`}>
    <View style={styles.profileCard}>
      <View style={styles.imagePlaceHolder} />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterText}>
          <Text>{person.name}</Text>
          <Text>{person.grade}</Text>
        </View>
        <View>
          <View style={styles.gearIconPlaceHolder} />
        </View>
      </View>
    </View>
  </Link>
);
export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    margin: 5,
    borderRadius: 2,
    elevation: 2
  },
  imagePlaceHolder: {
    height: 150,
    width: 150,
    backgroundColor: "#BDBDBD",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  cardFooter: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  cardFooterText: {
    flexDirection: "column"
  },
  gearIconPlaceHolder: {
    height: 24,
    width: 24,
    backgroundColor: "grey",
    borderRadius: 12
  }
});
