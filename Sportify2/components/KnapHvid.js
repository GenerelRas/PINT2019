import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class KnapHvid extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    top: PropTypes.number,
    left: PropTypes.number,
    onBtnPress: PropTypes.func
  };

  render() {
    const { title, top, left, onBtnPress } = this.props;
    return (
      <View style={styles.container} top={top} left={left}>
        <TouchableOpacity>
          <Text style={styles.btnText} onPress={onBtnPress}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#fff",
    height: 45,
    width: 130,
    borderRadius: 100
  },
  btnText: {
    fontSize: 16,
    color: "#232d3a",
    fontWeight: "500"
  }
});
