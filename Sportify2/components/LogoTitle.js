import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class LogoTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("/Users/joachimdemuth/Sportify2/assets/LogoTitle.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 25,
    width: 150
  }
});
