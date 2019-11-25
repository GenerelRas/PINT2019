import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class FollowersRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txt}>Following</Text>
          <Text style={styles.number}>0</Text>
        </View>
        <View>
          <Text style={styles.txt}>Followers</Text>
          <Text style={styles.number}>0</Text>
        </View>
        <View>
          <Text style={styles.txt}>Games</Text>
          <Text style={styles.number}>0</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20
  },
  txt: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  number: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  }
});
