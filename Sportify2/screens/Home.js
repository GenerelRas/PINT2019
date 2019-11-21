import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import LogoTitle from "../components/LogoTitle";
import FooterMenu from "../components/FooterMenu";
import Knap from "../components/Knap";
import Activity from "../components/Activity";
import ProfilePic from "../components/ProfilePic";
import MapComp from "../components/MapComp";
import * as marker from "../JSON/Activities";
export class Home extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerRight: () => <ProfilePic url="https://picsum.photos/200" />,
    headerBackTitle: "Home",
    headerRightContainerStyle: {
      paddingRight: 10
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.map}>
          <MapComp height={400} width={410} />
        </View>
        <View style={styles.activities}>
          <Text>Activities close to you</Text>
        </View>
        <View style={styles.activityList}>
          <ScrollView>
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "flex-start"
              }}
            >
              <Activity
                iconType="material-community"
                icon="basketball"
                sportText="Basketball"
                time="14.00"
              />
              <Activity
                iconType="material-community"
                icon="soccer"
                sportText="Soccer"
                time="18.00"
              />
              <Activity
                iconType="material-community"
                icon="run"
                sportText="Running"
                time="20.00"
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.addAct}>
          <Knap
            title="Create activity"
            onBtnPress={() => this.props.navigation.navigate("CreateActivity")}
          />
        </View>
        <View style={styles.footer}>
          <FooterMenu
            onHomePress={() => this.props.navigation.navigate("Home")}
            onProfilePress={() => this.props.navigation.navigate("Profile")}
          />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232d3a"
  },
  map: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  },

  activities: {
    flex: 0.5,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#232d3a40",
    alignItems: "center",
    justifyContent: "center"
  },
  activityList: {
    flex: 3.5,
    backgroundColor: "white",
    alignItems: "center"
  },
  addAct: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff"
  }
});
