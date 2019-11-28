import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import ProfileHeader from "../components/ProfileHeader";
import ActivityList from "../components/ActivityList";
import FooterMenu from "../components/FooterMenu";
import UserTitle from "../components/UserTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import SignUp from "../screens/SignUp";
import FollowersRow from "../components/FollowersRow";

export class Profile extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {};

  static navigationOptions = {
    // headerTitle: () => (
    //   <UserTitle
    //     userTitle={() => this.props.navigation.getParam("name", "Error")}
    //   />
    // ),

    // headerleftContainerStyle: {
    //   paddingLeft: 30
    // },
    headerStyle: {
      backgroundColor: "#232d3a",
      borderBottomWidth: null
    },
    headerRight: () => (
      <TouchableOpacity>
        <Icon type="feather" name="settings" size={25} color="#fff" />
      </TouchableOpacity>
    ),
    headerLeft: null,
    headerRightContainerStyle: {
      paddingRight: 10
    }
  };

  render() {
    let name = this.props.navigation.getParam("name", "Error");
    let age = this.props.navigation.getParam("age", "Error");
    let sport = this.props.navigation.getParam("sport", "Error");
    let ageSent = age + " years";
    let sports = ["Soccer, ", "Tennis, ", "Running "];
    let sportsSent = "Playing " + sport;
    console.log(global.pictures);
    return (
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.author}>
            <Image source={global.pictures[0]} style={styles.profileImage} />
            <View>
              <Text style={styles.authorName}>{name}</Text>
              <Text style={styles.age}>{ageSent}</Text>
              <Text style={styles.sport}>{sportsSent}</Text>
            </View>
          </View>
          <View style={styles.followers}>
            <FollowersRow />
          </View>
        </View>
        <View style={styles.activityList}>
          <ActivityList />
        </View>
        <View style={styles.footer}>
          <FooterMenu
            onHomePress={() => this.props.navigation.navigate("Home")}
            title="Home"
          />
        </View>
      </View>
    );
  }
}

// const username = this.props.navigation.getParam("name");

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileHeader: {
    flex: 2,
    backgroundColor: "#232d3a"
  },
  activityList: {
    flex: 4,
    backgroundColor: "#fff"
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  author: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 20
  },
  profileImage: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 40,
    height: 80,
    width: 80,
    marginBottom: 15,
    marginRight: 20
  },
  authorName: {
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    fontWeight: "500"
  },
  age: {
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    fontWeight: "200"
  },
  sport: {
    fontSize: 14,
    color: "#fff",
    textAlign: "left",
    fontWeight: "200"
  },
  followers: {
    paddingTop: 50,
    alignItems: "center"
  }
});
