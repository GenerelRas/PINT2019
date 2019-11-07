import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import LogoTitle from "../components/LogoTitle";
import FooterMenu from "../components/FooterMenu";
import Knap from "../components/Knap";
import Activity from "../components/Activity";
import ProfilePic from "../components/ProfilePic";

export class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <LogoTitle />,
      headerRight: () => <ProfilePic url="https://picsum.photos/200" />,
      headerRightContainerStyle: {
        paddingRight: 10
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.map}>
          {/* <Image
            source={{ uri: "https://picsum.photos/600" }}
            style={styles.mapImage}
          /> */}
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle={generateMapStyle}
            style={styles.mapImage}
            initialRegion={{
              latitude: 55.6598,
              longitude: 12.591537,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            <MapView.Marker
              coordinate={{ latitude: 55.663025, longitude: 12.593587 }}
              title={"Soccer"}
              description={"Soccer"}
            >
              <Image
                source={require("../assets/icons/soccer.png")}
                style={{ height: 40, width: 40 }}
              />
            </MapView.Marker>
            <MapView.Marker
              coordinate={{ latitude: 55.662435, longitude: 12.59384 }}
              title={"Basketball"}
              description={"Basketball"}
            >
              <Image
                source={require("../assets/icons/basketball.png")}
                style={{ height: 40, width: 40 }}
              />
            </MapView.Marker>
            <MapView.Marker
              coordinate={{ latitude: 55.662425, longitude: 12.59318 }}
              title={"Run"}
              description={"Run"}
            >
              <Image
                source={require("../assets/icons/run.png")}
                style={{ height: 40, width: 40 }}
              />
            </MapView.Marker>
          </MapView>
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
          <Knap title="Create activity" />
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

const generateMapStyle = require("../JSON/GoogleMapsStyling");

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
  mapImage: {
    height: 600,
    width: 600
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
