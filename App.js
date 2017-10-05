import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Redirect, AndroidBackButton } from "react-router-native";
import Tabs from "./src/screens/Tabs";
import Conversation from "./src/screens/Conversation";
import { statusBarHeight } from "./src/dimens";

const Redirector = () => (
  <View>
    <Redirect to={{ pathname: '/home/explore'}}/>
  </View>
);

const App = () => (
  <NativeRouter>
    <AndroidBackButton>
      <View style={styles.page}>
        <Route exact path="/" component={Redirector} />
        <Route path="/home" component={Tabs} />
        <Route path="/conversation" component={Conversation} />
      </View>
    </AndroidBackButton>
  </NativeRouter>
);

export default App;

const styles = StyleSheet.create({
  page: {
    marginTop: statusBarHeight,
  }
});








// import { TabNavigator } from "react-navigation";
// import HomeScreen from "./components/HomeScreen";
// import ProfileScreen from "./components/ProfileScreen";
// import { primaryColor } from './theme';

// const AppWithNavigator = TabNavigator(
//   {
//     Main: { screen: HomeScreen },
//     Profile: { screen: ProfileScreen }
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         marginTop: Expo.Constants.statusBarHeight,
//         backgroundColor: primaryColor,
//       }
//     }
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <AppWithNavigator />;
//   }
// }
