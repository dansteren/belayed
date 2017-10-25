import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
        <View style={styles.bannerImagePlaceholder} />
        <View style={styles.profileImagePlaceholder} />
        <View style={styles.content}>
          <Text style={styles.header}>{this.state.person.firstName}</Text>
        </View>
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
    flexGrow: 1
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
    position: "relative",
    top: -75,
    borderRadius: 75
  },
  content: {
    flexGrow: 1
  },
  header: {
    fontSize: 32,
    alignSelf: "center",
    color: primaryTextDark
  },
  bottomButton: {
    height: 56,
    elevation: 8,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 14,
    color: primaryTextLight
  }
});
