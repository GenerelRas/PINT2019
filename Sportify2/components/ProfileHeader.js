import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

import FollowersRow from "./FollowersRow";

export default class ProfileHeader extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };
  render() {
    const { name } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          {/* <TouchableOpacity>
            <Icon name="settings" size={35} color="#fff" />
          </TouchableOpacity> */}
        </View>
        <View style={styles.author}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.profileImage}
          />
          <Text style={styles.authorName}>{name}</Text>
        </View>
        <View style={styles.followers}>
          <FollowersRow />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "37%"
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 10
  },
  author: {
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 60,
    height: 120,
    width: 120,
    marginBottom: 15
  },
  authorName: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 20
  },
  followers: {
    paddingTop: 20,
    alignItems: "center"
  }
});
