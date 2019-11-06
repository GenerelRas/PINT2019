import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

import Input from "../components/Input.js";
import KnapHvid from "../components/KnapHvid.js";

export class SignUp3 extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signUp}>
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.line}>
            <View style={styles.lineWhite}></View>
            <View style={styles.lineGrey}></View>
          </View>
        </View>
        <View style={styles.name}></View>
        <View style={styles.city}>
          <Input text="Skill level" autoCap="words" keyType="default" />
        </View>
        <View style={styles.email}>
          <Input text="Other sport" keyType="email-address" />
        </View>
        <View style={styles.email}>
          <Input text="Skill level" keyType="phone-pad" />
        </View>

        <View style={styles.next}>
          <KnapHvid title="Create account" />
        </View>
      </View>
    );
  }
}

export default SignUp3;

const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#232D3A",
    marginTop:
      Platform.OS === "android" || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  },
  signUp: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232d3a"
  },
  text: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "200"
  },
  line: {
    marginTop: 50,
    width: 300
  },
  lineGrey: {
    position: "absolute",
    height: 3,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  lineWhite: {
    position: "absolute",
    height: 3,
    width: 300,
    backgroundColor: "#555",
    borderRadius: 10
  },
  name: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232d3a"
  },
  city: {
    flex: 1,
    backgroundColor: "#232d3a",
    justifyContent: "center",
    alignItems: "center"
  },
  email: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232d3a"
  },
  phone: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232d3a"
  },
  next: {
    flex: 4,
    backgroundColor: "#232d3a",
    alignItems: "center"
  }
});
