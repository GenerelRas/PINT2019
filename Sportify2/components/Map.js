import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class Map extends Component {
  render() {
    return (
      <View>
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
        />
      </View>
    );
  }
}
const generateMapStyle = require("../JSON/GoogleMapsStyling");

const styles = StyleSheet.create({
  mapImage: {
    height: 200,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff6"
  }
});
