import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NativeRouter,
  Route,
  Link,
  Redirect,
  AndroidBackButton
} from "react-router-native";
import { Conversation, Tabs } from "./src/screens";

const Redirector = () => (
  <View>
    <Redirect to={{ pathname: "/home/explore" }} />
  </View>
);

const App = () => (
  <NativeRouter>
    <AndroidBackButton>
      <View style={styles.page}>
        <View style={{ flexGrow: 1 }}>
          <Route exact path="/" component={Redirector} />
          <Route path="/home" component={Tabs} />
          <Route path="/conversation/:threadId" component={Conversation} />
        </View>
      </View>
    </AndroidBackButton>
  </NativeRouter>
);

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
});
