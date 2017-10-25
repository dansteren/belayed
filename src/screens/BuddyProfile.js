import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "react-router-native";
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

export default class BuddyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {}
    };
  }

  componentWillMount() {
    this.fetchData(this.props.match.params.userId);
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView style={{ flexGrow: 1, marginBottom: 56 }}>
          <View style={styles.bannerImagePlaceholder} />
          <View style={styles.profileImagePlaceholder} />
          <View style={styles.content}>
            <Text style={styles.header}>
              {this.state.person.firstName + " " + this.state.person.lastName}
            </Text>
            <View style={styles.section}>
              <Text style={styles.subheader}>About</Text>
              <Text>
                {this.state.person.about ||
                  "This person has not yet provided a personal description"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Gear</Text>
              <Text>{"Has rope: " + this.state.person.hasRope}</Text>
              <Text>
                {"Has belay device: " + this.state.person.hasBelayDevice}
              </Text>
              <Text>
                {"Has quickdraws: " + this.state.person.hasQuickdraws}
              </Text>
              <Text>{"Has runners: " + this.state.person.hasRunners}</Text>
              <Text>{"Has chalk: " + this.state.person.hasChalk}</Text>
              <Text>{"Has harness: " + this.state.person.hasHarness}</Text>
              <Text>{"Has shoes: " + this.state.person.hasShoes}</Text>
              <Text>{"Has helmet: " + this.state.person.hasHelmet}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Skill</Text>
              <Text>
                {"Indoor Grade: " + YDSGrade[this.state.person.indoorGrade]}
              </Text>
              <Text>
                {"Outdoor Grade: " + YDSGrade[this.state.person.outdoorGrade]}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Stats</Text>
              <Text>
                {"Verified Climbs: " + this.state.person.verifiedClimbs}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Link
          to={`/conversation/${this.state.person.id}`}
          style={styles.bottomButton}
        >
          <Text style={styles.buttonText}>START CHATTING</Text>
        </Link>
      </View>
    );
  }

  async fetchData(userId) {
    const person = await entangledb.getUser(userId);
    this.setState({ person });
  }
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column"
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
  },
  bottomButton: {
    backgroundColor: primaryColor,
    height: 56,
    elevation: 8,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  buttonText: {
    fontSize: 14,
    color: primaryTextLight
  }
});
