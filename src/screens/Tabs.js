import React from "react";
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import Explore from "./Explore";
import Climbs from "./Climbs";
import Topics from "./Topics";
import Profile from "./Profile";
import TabButtons from "../components/TabButtons";

const Tabs = ({ match }) => (
  <View style={styles.page}>
    <TabButtons match={match} />
    <Route path={`${match.url}/explore`} component={Explore} />
    {/* <Route path="/explore" component={Explore} /> */}
    <Route path={`${match.url}/climbs`} component={Climbs} />
    <Route path={`${match.url}/topics`} component={Topics} />
    <Route path={`${match.url}/profile`} component={Profile} />
  </View>
);

export default Tabs;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF"
  }
});
