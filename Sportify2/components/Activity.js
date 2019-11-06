import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

export default class Activity extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconType: PropTypes.string,
    sportText: PropTypes.string,
    time: PropTypes.string
  };

  render() {
    const { icon, iconType, sportText, time } = this.props;

    let sport = sportText + " in Nørrebro";
    return (
      <View style={styles.container}>
        <View style={{ marginRight: 10 }}>
          <Icon type={iconType} name={icon} size={35} color="#232d3a" />
        </View>
        <View style={{ marginRight: 10 }}>
          <Text style={styles.activity}>{sport}</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Text style={styles.clock}>{time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
