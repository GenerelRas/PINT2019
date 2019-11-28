import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  AsyncStorage,
  TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import Profile from "./Profile";
import Input from "../components/Input.js";
import KnapHvid from "../components/KnapHvid.js";
import ProfileHeader from "../components/ProfileHeader";
import { NavigationActions } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

export class SignUp extends Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sport: ""
    };
  }

  login = async () => {
    const { navigate } = this.props.navigation;
    let name = this.state.name;
    let age = this.state.age;
    let sport = this.state.sport;
    navigate("Profile", { name, age, sport });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signUp}>
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.cam}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CameraPage")}
            >
              <Icon
                type="material-community"
                name="camera"
                color="#fff"
                size={45}
              />
            </TouchableOpacity>
            <Text style={styles.picText}>Add profile picture</Text>
          </View>
        </View>
        <View style={styles.city}>
          <Input
            text="Sports"
            autoCap="words"
            keyType="default"
            handleChange={text => {
              this.setState({ sport: text });
            }}
          />
        </View>
        <View style={styles.city}>
          <Input
            text="Age"
            autoCap="words"
            keyType="default"
            handleChange={text => {
              this.setState({ age: text });
            }}
          />
        </View>
        <View style={styles.name}>
          <Input
            text="Username"
            autoCap="words"
            keyType="default"
            correct={false}
            handleChange={text => {
              this.setState({ name: text });
            }}
          />
        </View>
        <View style={styles.email}>
          <Input text="Password" keyType="default" password={true} />
        </View>
        <View style={styles.email}>
          <Input text="Confirm password" keyType="default" password={true} />
        </View>

        <View style={styles.next}>
          <KnapHvid title="Sign up" onBtnPress={() => this.login()} />
        </View>
      </View>
    );
  }
}

export default SignUp;

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
  cam: {
    // height: 50,
    // width: 50,
    // borderRadius: 25,
    backgroundColor: "#232d3a",
    marginTop: 50
  },
  picText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
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
    width: 100,
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
