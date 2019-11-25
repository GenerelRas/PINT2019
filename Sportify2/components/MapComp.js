import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as marker from "../JSON/Activities";
import * as Location from "expo-location";
import PropTypes from "prop-types";

import * as Permissions from "expo-permissions";

import { getDistance } from "geolib";

let pointsOfInterest = [];

class pointOfInterest {
  // Defining our own 'type' : pointOfInterest
  constructor(coords, radius, whatis) {
    this.coords = coords; // Latitude and Longitude
    this.radius = radius; // Radius in circle of interest
    this.whatis = whatis; // Short txt to describe
    this.currentDistance = 99999; // Just put me as far as way as I can to begin with ...
  }
}

function addPointOfInterest(lati, longi, radius, whatis) {
  // Making it easier to add new pointOfInterest to pointsOfInterest
  pointsOfInterest.push(
    new pointOfInterest({ latitude: lati, longitude: longi }, radius, whatis)
  );
}

function orderDistanceArray(currentCoords) {
  // calculate distance from currentpos to all points of interest and sort pointsOfInterest array
  //in ascending order of distance
  pointsOfInterest.forEach(p => {
    p.currentDistance = getDistance(currentCoords, p.coords, (accuracy = 1));
  });

  pointsOfInterest.sort((p1, p2) => {
    if (p1.currentDistance < p2.currentDistance) {
      return -1;
    }
    if (p1.currentDistance > p2.currentDistance) {
      return 1;
    }
    return 0;
  }); // Standard in-place sorting of array in order of ascending distance to current location
  // See documentation on sort with compare function here:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
}

function initalizePointsOfInterest() {
  // // Let throw four interesting places in here. Called when starting the show
  /* Get coordinates by cut&paste from Google Maps :
  Rundtårn : 55.681547,12.575751
  Rosenborg:  55.685970,12.577291
  Regensen: 55.681133,12.575229
  Børsen: 55.676038,12.584014
*/
  addPointOfInterest(55.68597, 12.577291, 100, "Soccer");
  addPointOfInterest(55.681547, 12.575751201, 100, "Basketball");
  addPointOfInterest(55.676038, 12.584014, 100, "Run");
  addPointOfInterest(55.673409, 12.579428, 2000, "Soccer2");
}

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      region: null,
      marker: null
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  async componentDidMount() {
    await this.AskPermission(); // Check that we have permission to access location data - ask if we don't
    this.watchId = await Location.watchPositionAsync(
      {
        accuray: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 1,
        mayShowUserSettingsDialog: true
      },
      // This is the callback function specifying  all the stuff that we want to happen whenver we have a new location
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
            latitudeDelta: 0.075, // About 11 km
            longitudeDelta: 0.075 // About 6 km
          },
          marker: {
            latlng: currentPosition.coords
          },

          error: null
        });
        // if (pointsOfInterest[0].currentDistance < pointsOfInterest[0].radius) {
        //   // Only checkig if in the zone of nearest ! flaw ?
        //   //this.props.inZone( pointsOfInterest[0]);
        //   this.props.inZone(true, pointsOfInterest[0]);
        //   //console.log(this.props.showCoordinates);
        // }
        // Just in case we want to log while debugging
        //console.group(pointsOfInterest);
      }
    );
  }

  componentWillUnmount() {
    this.watchId.remove(); // stop watching for location changes
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

  // Preparing and  rendering what to put on the screen

  render() {
    const { location } = this.state; // Taking location from overall state object
    const { height, width } = this.props;
    let text = "Vent venligst";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      {
        text =
          "timestamp:" +
          location.timestamp +
          "\n" +
          " Længdegrad: " +
          location.coords.longitude +
          "\n" +
          " Breddegrad: " +
          location.coords.latitude;
      }
    }
    console.log(pointsOfInterest);
    return (
      <View>
        {this.state.region ? (
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle={generateMapStyle}
            style={{ height: height, width: width }}
            region={this.state.region}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
          >
            {pointsOfInterest.map((p, index) => (
              <Marker key={index} coordinate={p.coords} title={p.whatis} />
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
initalizePointsOfInterest();
const generateMapStyle = require("../JSON/GoogleMapsStyling");

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    color: "white"
  }
});
