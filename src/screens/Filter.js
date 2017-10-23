import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBox } from "../components";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.page}>
        <SearchBox
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.searchResults} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1
  },
  searchResults: {
    flexGrow: 1
  }
});
