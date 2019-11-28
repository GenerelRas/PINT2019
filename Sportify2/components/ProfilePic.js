import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default class ProfilePic extends Component {
  static propTypes = {
    url: PropTypes.array,
    onPicPress: PropTypes.func
  };
  render() {
    const { url, onPicPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPicPress}>
          <Image style={styles.image} source={url} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff"
  }
});
