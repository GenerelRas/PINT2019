import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import ProfileHeader from "../components/ProfileHeader";
import ActivityList from "../components/ActivityList";
import FooterMenu from "../components/FooterMenu";
import UserTitle from "../components/UserTitle";
import { TouchableOpacity } from "react-native-gesture-handler";

export class Profile extends Component {
  static navigationOptions = {
    headerTitle: () => <UserTitle userTitle={username} />,
    headerleftContainerStyle: {
      paddingLeft: 30
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
    return (
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <ProfileHeader name={username} />
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

const username = "John Doe";

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileHeader: {
    flex: 3,
    backgroundColor: "#232d3a"
  },
  activityList: {
    flex: 4,
    backgroundColor: "#fff"
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
