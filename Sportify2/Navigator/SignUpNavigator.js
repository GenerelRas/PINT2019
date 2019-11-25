import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import SignUp from "../screens/SignUp";
import SignUp2 from "../screens/SignUp2";
import SignUp3 from "../screens/SignUp3";
import { createAppContainer } from "react-navigation";

class SignUpNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const Navigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUp
    },
    SignUp2: {
      screen: SignUp2
    },
    SignUp3: {
      screen: SignUp3
    }
  },
  {
    initialRouteName: "SignUp",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#232d3a"
      },
      headerRightContainerStyle: {
        paddingRight: 10,
        justifyContent: "center"
      },
      headerleftContainerStyle: {
        paddingLeft: 10
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18
      },
      headerMode: "float",
      headerTransitionPreset: "fade-in-place"
    }
  }
);

export default createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
