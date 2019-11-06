import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import Profile from "./screens/Profile";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import SignUp3 from "./screens/SignUp3";

import { createAppContainer } from "react-navigation";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    SignUp3: {
      screen: SignUp3
    },
    SignUp2: {
      screen: SignUp2
    },
    SignUp: {
      screen: SignUp
    },
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#232d3a",
        borderBottomColor: "#fff1"
      },
      // headerBackTitle: " ",
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

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
