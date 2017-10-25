import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { statusBarHeight } from "../dimens";
import {
  primaryTextDark,
  primaryTextLight,
  primaryColor,
  grey500,
  grey700
} from "../theme";
import * as entangledb from "../services/entangledb";
import { YDSGrade } from "../utils";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    const { user } = this.state;
    return (
      <ScrollView style={styles.page}>
        <View style={styles.bannerImagePlaceholder} />
        <View style={styles.profileImagePlaceholder} />
        <View style={styles.content}>
          <Text style={styles.header}>
            {user.firstName + " " + user.lastName}
          </Text>
          <View style={styles.section}>
            <Text style={styles.subheader}>About</Text>
            <Text>
              {user.about ||
                "This person has not yet provided a personal description"}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Gear</Text>
            <Text>{"Has rope: " + user.hasRope}</Text>
            <Text>{"Has belay device: " + user.hasBelayDevice}</Text>
            <Text>{"Has quickdraws: " + user.hasQuickdraws}</Text>
            <Text>{"Has runners: " + user.hasRunners}</Text>
            <Text>{"Has chalk: " + user.hasChalk}</Text>
            <Text>{"Has harness: " + user.hasHarness}</Text>
            <Text>{"Has shoes: " + user.hasShoes}</Text>
            <Text>{"Has helmet: " + user.hasHelmet}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Skill</Text>
            <Text>{"Indoor Grade: " + YDSGrade[user.indoorGrade]}</Text>
            <Text>{"Outdoor Grade: " + YDSGrade[user.outdoorGrade]}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Stats</Text>
            <Text>{"Verified Climbs: " + user.verifiedClimbs}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  async fetchData() {
    const currentUserId = await entangledb.getCurrentUserId();
    const user = await entangledb.getUser(currentUserId);
    this.setState({ user });
  }
}

const styles = StyleSheet.create({
  page: {
    marginBottom: 56
  },
  bannerImagePlaceholder: {
    backgroundColor: grey700,
    height: 200
  },
  profileImagePlaceholder: {
    backgroundColor: grey500,
    alignSelf: "center",
    elevation: 4,
    height: 150,
    width: 150,
    position: "absolute",
    top: 125,
    borderRadius: 75
  },
  content: {
    paddingTop: 75
  },
  header: {
    fontSize: 32,
    alignSelf: "center",
    color: primaryTextDark
  },
  subheader: {
    fontSize: 18
  },
  section: {
    padding: 16
  }
});
