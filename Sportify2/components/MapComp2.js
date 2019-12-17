import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as marker from "../JSON/Activities";
import * as Location from "expo-location";
import PropTypes from "prop-types";

import * as Permissions from "expo-permissions";

import { getDistance } from "geolib";

let markers = [];

function orderDistanceArray(currentCoords) {}

export default class MapComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      region: null,
      marker: null,
      errorMessage: null,
      knapper: [
        {
          latlng: {
            latitude: 55.63874963822968,
            longitude: 12.596855163574219
          },
          title: "Basketball",
          desc: "3v3 in Copenhagen",
          icon:
            "/Users/joachimdemuth/Documents/GitHub/PINT2019/Sportify2/assets/icons/basketball.png"
        },
        {
          latlng: {
            latitude: 55.66778402702137,
            longitude: 12.588049806654453
          },
          title: "Run",
          desc: "5k in Copenhagen",
          icon:
            "/Users/joachimdemuth/Documents/GitHub/PINT2019/Sportify2/assets/icons/run.png"
        },
        {
          latlng: {
            latitude: 55.671816028499016,
            longitude: 12.567494362592697
          },
          title: "Soccer",
          desc: "5v5 in Copenhagen",
          icon:
            "/Users/joachimdemuth/Documents/GitHub/PINT2019/Sportify2/assets/icons/soccer.png"
        },
        {
          latlng: {
            latitude: 55.694989518615344,
            longitude: 12.56372720003128
          },
          title: "Basketball",
          desc: "2v2 in Copenhagen",
          icon:
            "/Users/joachimdemuth/Documents/GitHub/PINT2019/Sportify2/assets/icons/basketball.png"
        }
      ]
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  async componentDidMount() {
    await this.AskPermission();
    this.watchId = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 1,
        mayShowUserSettingsDialog: true
      },
      currentPosition => {
        orderDistanceArray({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude
        });

        this.setState({
          location: currentPosition,
          region: {
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            latitudeDelta: 0.075,
            longitudeDelta: 0.075
          },
          marker: {
            latlng: currentPosition.coords
          },
          error: null
        });
      }
    );
  }

  conponentWillUnmount() {
    this.watchId.remove();
  }

  AskPermission = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log("Asking for geo permission: " + status);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
  };

  render() {
    const { location } = this.state;
    const { height, width } = this.props;
    console.log(this.state.knapper);
    let text = "Vent veligst";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      {
        text =
          "timestamp:" +
          location.timestamp +
          "\n" +
          " Længegrad: " +
          location.coords.longitude +
          "\n" +
          " Breddegrad: " +
          location.coords.latitude;
      }
    }
    return (
      <View>
        {this.state.region ? (
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle={generateMapStyle}
            style={{ height: height, width: width }}
            initialRegion={this.state.region}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            onPress={e =>
              this.setState({
                knapper: [
                  ...this.state.knapper,
                  {
                    latlng: e.nativeEvent.coordinate,
                    title: "Soccer",
                    desc: "5v5 in Copenhagen",
                    icon:
                      "/Users/joachimdemuth/Documents/GitHub/PINT2019/Sportify2/assets/icons/soccer.png"
                  }
                ]
              })
            }
          >
            {this.state.knapper.map((p, index) => (
              <Marker
                key={index}
                coordinate={p.latlng}
                title={p.title}
                description={p.desc}
                image={p.icon}
              />
            ))}
          </MapView>
        ) : (
          <Text style={styles.paragraph}>Vent venligst</Text>
        )}
        {this.props.showCoordinates ? (
          <Text style={styles.paragraph}>{text}</Text>
        ) : null}
      </View>
    );
  }
}

const generateMapStyle = require("../JSON/GoogleMapsStyling");
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    color: "white"
  }
});
