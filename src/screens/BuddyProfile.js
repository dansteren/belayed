import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Link, withRouter } from "react-router-native";
import { statusBarHeight } from "../dimens";
import {
  primaryTextDark,
  primaryTextLight,
  primaryColor,
  grey500,
  grey700
} from "../theme";
import * as entangledb from "../services/entangledb";
import { YDSGrade, mapAsync } from "../utils";

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
    const { person } = this.state;
    const FooterButton = withRouter(({ history }) => (
      <TouchableOpacity
        activeOpacity={1}
        onPress={async () => {
          const currentUserId = await entangledb.getCurrentUserId();
          const currentUser = await entangledb.getUser(currentUserId);
          const conversations = await mapAsync(
            currentUser.conversations,
            async convId => {
              return await entangledb.getConversation(convId);
            }
          );
          const convsWithUser = conversations.filter(conv => {
            return conv.participants.indexOf(person.id) !== -1;
          });
          if (convsWithUser.length === 0) {
            // This is first contact.
            const newConvId = await entangledb.createConversation([
              currentUserId,
              person.id
            ]);
            history.push(`/conversation/${newConvId}`);
          } else {
            // We already started a conversation with them.
            const existingConversation = convsWithUser[0];
            history.push(`/conversation/${existingConversation.id}`);
          }
        }}
        style={styles.bottomButton}
      >
        <Text style={styles.buttonText}>START CHATTING</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={styles.page}>
        <ScrollView style={{ flexGrow: 1, marginBottom: 56 }}>
          <View style={styles.bannerImagePlaceholder}>
            <Image
              style={styles.bannerImage}
              source={{ uri: person.bannerUrl }}
            />
          </View>
          <View style={styles.profileImagePlaceholder}>
            <Image
              style={styles.profileImage}
              source={{ uri: person.pictureUrl }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.header}>
              {person.firstName + " " + person.lastName}
            </Text>
            <View style={styles.section}>
              <Text style={styles.subheader}>About</Text>
              <Text>
                {person.about ||
                  "This person has not yet provided a personal description"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Gear</Text>
              <Text>{"Has rope: " + person.hasRope}</Text>
              <Text>{"Has belay device: " + person.hasBelayDevice}</Text>
              <Text>{"Has quickdraws: " + person.hasQuickdraws}</Text>
              <Text>{"Has runners: " + person.hasRunners}</Text>
              <Text>{"Has chalk: " + person.hasChalk}</Text>
              <Text>{"Has harness: " + person.hasHarness}</Text>
              <Text>{"Has shoes: " + person.hasShoes}</Text>
              <Text>{"Has helmet: " + person.hasHelmet}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Skill</Text>
              <Text>{"Indoor Grade: " + YDSGrade[person.indoorGrade]}</Text>
              <Text>{"Outdoor Grade: " + YDSGrade[person.outdoorGrade]}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheader}>Stats</Text>
              <Text>{"Verified Climbs: " + person.verifiedClimbs}</Text>
            </View>
          </View>
        </ScrollView>
        <FooterButton />
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
  bannerImage: {
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
  profileImage: {
    height: 150,
    width: 150,
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
