import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import Profile from "./screens/Profile";
import Home from "./screens/Home";
import CreateActivity from "./screens/CreateActivity";
import SignUp from "./screens/SignUp";
import CameraPage from "./screens/camera.page";
import "./src/global";

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
    CreateActivity: {
      screen: CreateActivity
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerBackTitle: null
      }
    },
    Profile: {
      screen: Profile
    },
    SignUp: {
      screen: SignUp
    },
    CameraPage: {
      screen: CameraPage
    }
  },
  {
    initialRouteName: "SignUp",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#232d3a",
        borderBottomColor: "#fff1"
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

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
