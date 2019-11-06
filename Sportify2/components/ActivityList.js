import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    title: "Recent activity",
    data: [
      "Basketball in Vesterbro",
      "Tennis in Nørrebro",
      "Running 5km",
      "Soccer in Amager"
    ]
  },
  {
    title: "Upcoming activity",
    data: [
      "Tennis in Grønnehallen",
      "Basketball in Nordvest",
      "Ice Hockey in Ørestad",
      "Soccer in Parken"
    ]
  }
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ActivityList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.object}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  object: {
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 20
  },
  header: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#232D3A",
    marginRight: 170,
    marginBottom: 15
  },
  item: {
    marginBottom: 20,
    paddingLeft: 10
  },
  title: {
    fontSize: 16,
    color: "#232D3A",
    fontWeight: "400"
  }
});
