import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";

export default class Input extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number,
    autoCap: PropTypes.string,
    password: PropTypes.bool,
    keyType: PropTypes.string,
    handleChange: PropTypes.func,
    correct: PropTypes.bool
  };

  render() {
    const {
      text,
      icon,
      top,
      left,
      autoCap,
      password,
      keyType,
      handleChange,
      correct
    } = this.props;

    return (
      <View style={styles.container} top={top} left={left}>
        <Icon style={styles.searchIcon} name={icon} size={35} color="#fff" />
        <TextInput
          style={styles.input}
          autoCapitalize={autoCap}
          placeholder={text}
          placeholderTextColor={"#fff6"}
          color="#fff"
          secureTextEntry={password}
          keyboardType={keyType}
          onChangeText={handleChange}
          autoCorrect={correct}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    paddingBottom: 100
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    fontSize: 14
  },
  searchIcon: {
    paddingTop: 10
  }
});
