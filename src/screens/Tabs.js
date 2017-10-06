import React from "react";
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import { Explore, Climbs, Inbox, Profile } from "./index";
import TabButtons from "../components/TabButtons";

const Tabs = ({ match }) => (
  <View style={styles.page}>
    <TabButtons match={match} />
    <Route path={`${match.url}/explore`} component={Explore} />
    <Route path={`${match.url}/climbs`} component={Climbs} />
    <Route path={`${match.url}/inbox`} component={Inbox} />
    <Route path={`${match.url}/profile`} component={Profile} />
  </View>
);

export default Tabs;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF"
  }
});
