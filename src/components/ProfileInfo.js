import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  primaryTextDark,
  grey500,
  grey700,
  iconDarkActive,
  iconDarkInactive
} from "../theme";
import { YDSGrade } from "../utils";

const ProfileInfo = ({ user }) => (
  <View>
    <View style={styles.bannerImagePlaceholder}>
      <Image style={styles.bannerImage} source={{ uri: user.bannerUrl }} />
    </View>
    <View style={styles.profileImagePlaceholder}>
      <Image style={styles.profileImage} source={{ uri: user.pictureUrl }} />
    </View>
    <View style={styles.content}>
      <Text style={styles.userName}>
        {user.firstName + " " + user.lastName}
      </Text>
      <View style={styles.section}>
        <Text style={styles.subheader}>About</Text>
        <Text style={{ lineHeight: 24 }}>
          {user.about ||
            "This person has not yet provided a personal description"}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Gear</Text>
        <View style={styles.gearSection}>
          <View style={styles.gearRow}>
            <View style={styles.gearColumn}>
              {user.hasRope ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Rope</Text>
            </View>
            <View style={styles.gearColumn}>
              {user.hasQuickdraws ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Quickdraws</Text>
            </View>
            <View style={styles.gearColumn}>
              {user.hasBelayDevice ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Belay Device</Text>
            </View>
          </View>
          <View style={styles.gearRow}>
            <View style={styles.gearColumn}>
              {user.hasHarness ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Harness</Text>
            </View>
            <View style={styles.gearColumn}>
              {user.hasShoes ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Shoes</Text>
            </View>
            <View style={styles.gearColumn}>
              {user.hasHelmet ? (
                <View style={styles.gearIconActive} />
              ) : (
                <View style={styles.gearIconInactive} />
              )}
              <Text>Helmet</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Skill Level</Text>
        <View style={styles.sectionContents}>
          <View style={styles.textStat}>
            <Text>Indoor Grade</Text>
            <Text>{YDSGrade[user.indoorGrade]}</Text>
          </View>
          <View style={styles.textStat}>
            <Text>Outdoor Grade</Text>
            <Text>{YDSGrade[user.outdoorGrade]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Stats</Text>
        <View style={styles.sectionContents}>
          <View style={styles.textStat}>
            <Text>Verified Climbs</Text>
            <Text>{user.verifiedClimbs}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
export default ProfileInfo;

const styles = StyleSheet.create({
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
  userName: {
    fontSize: 32,
    alignSelf: "center",
    color: primaryTextDark
  },
  subheader: {
    fontSize: 18,
    marginBottom: 8
  },
  section: {
    padding: 16
  },
  sectionContents: {
    marginLeft: 16,
    marginRight: 16
  },
  textStat: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 4
  },
  gearSection: {},
  gearRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
    marginBottom: 8
  },
  gearColumn: {
    flexDirection: "column",
    alignItems: "center"
  },
  gearIconActive: {
    backgroundColor: iconDarkActive,
    height: 72,
    width: 72,
    borderRadius: 36,
    justifyContent: "center"
  },
  gearIconInactive: {
    backgroundColor: iconDarkInactive,
    height: 72,
    width: 72,
    borderRadius: 36,
    justifyContent: "center"
  }
});
