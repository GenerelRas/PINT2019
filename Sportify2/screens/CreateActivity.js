import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Icon } from "react-native-elements";
import MapComp from "../components/MapComp";
import Input from "../components/Input";
import Map from "../components/Map";
import { TouchableOpacity } from "react-native-gesture-handler";

export class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",
      phone: ""
    };
  }

  handleChangeInput = (text, mail, num) => {
    this.setState({ title: text });
    this.setState({ email: mail });
    this.setState({ phone: num });
  };

  static navigationOptions = {
    headerTitle: "Create activity",
    headerBackImage: <Image source={require("../assets/icons/x.png")} />,
    headerLeftContainerStyle: {
      paddingLeft: 10
    }
  };

  render() {
    const { title, email, phone } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.header}>{email}</Text>
          <Text style={styles.header}>{phone}</Text>
        </View>
        <View style={styles.sport}>
          <TextInput
            placeholder="Sport"
            style={styles.sportInput}
            placeholderTextColor={"#fff6"}
            onChangeText={this.handleChangeInput}
            value={title}
            color="#fff"
          />
        </View>
        <View style={styles.dateTime}>
          <TextInput
            placeholder="Date"
            style={styles.input}
            placeholderTextColor={"#fff6"}
            color="#fff"
            onChangeText={this.handleChangeInput}
            value={email}
          />
          <TextInput
            placeholder="Time"
            style={styles.input2}
            placeholderTextColor={"#fff6"}
            color="#fff"
            onChangeText={this.handleChangeInput}
            value={phone}
          />
        </View>
        <View style={styles.skillPlayers}>
          <TextInput
            placeholder="Skill"
            style={styles.input}
            placeholderTextColor={"#fff6"}
            color="#fff"
          />
          <TextInput
            placeholder="Players"
            style={styles.input2}
            placeholderTextColor={"#fff6"}
            color="#fff"
          />
        </View>
        <View style={styles.smallMap}>
          <Text style={styles.touch}>Touch to enhance</Text>
          <View style={styles.footer}>
            <MapComp height={200} width={300} />
            <TouchableOpacity
              style={styles.button}
              onpress={() =>
                addPointOfInterest(55.670001, 12.588564, 100, "Tennis")
              }
            >
              <Text style={styles.buttonText}>Create activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CreateActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1.5,
    backgroundColor: "#232d3a",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40,
    fontWeight: "200",
    color: "#fff"
  },
  sport: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#232d3a",
    justifyContent: "center"
  },
  sportInput: {
    height: 40,
    width: 200,
    fontSize: 14,
    borderBottomColor: "#fff",
    borderBottomWidth: 1
  },
  dateTime: {
    flex: 1,
    backgroundColor: "#232d3a",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 90,
    fontSize: 14,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginRight: 20
  },
  input2: {
    height: 40,
    width: 90,
    fontSize: 14,
    borderBottomColor: "#fff",
    borderBottomWidth: 1
  },
  skillPlayers: {
    flex: 1,
    backgroundColor: "#232d3a",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  smallMap: {
    flex: 4,
    backgroundColor: "#232d3a",
    alignItems: "center"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 200,
    width: 300,
    borderRadius: 20
  },
  touch: {
    fontSize: 20,
    color: "#fff6",
    marginBottom: 10,
    marginTop: 10
  },
  footer: {
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 150,
    borderRadius: 100,
    backgroundColor: "#fff",
    marginTop: 20
  },
  buttonText: {
    color: "#232d3a",
    fontSize: 16
  }
});
