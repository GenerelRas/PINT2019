import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

export default class FooterMenu extends Component {
  static propTypes = {
    onHomePress: PropTypes.func,
    onProfilePress: PropTypes.func
  };
  render() {
    const { onHomePress, onProfilePress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.menuIcon}>
          <TouchableOpacity onPress={onHomePress}>
            <Icon name="home" size={45} color="#232D3A" />
          </TouchableOpacity>

          <Text style={styles.iconText}>Home</Text>
        </View>
        <View style={styles.menuIcon}>
          <TouchableOpacity>
            <Icon name="search" size={45} color="#232D3A" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Search</Text>
        </View>
        <View style={styles.menuIcon}>
          <TouchableOpacity onPress={onProfilePress}>
            <Icon name="person" size={45} color="#232D3A" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Profile</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#232D3A40",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  menuIcon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  iconText: {}
});
