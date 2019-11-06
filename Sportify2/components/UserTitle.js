import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
export default class UserTitle extends Component {
  static propTypes = {
    userTitle: PropTypes.string
  };

  render() {
    const { userTitle } = this.props;
    return (
      <View>
        <Text style={styles.title}>{userTitle}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff"
  }
});
