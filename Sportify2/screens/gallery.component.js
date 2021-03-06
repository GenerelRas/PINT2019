import React from "react";
import { View, Image, ScrollView } from "react-native";

import styles from "../styles/styles";

export default ({ captures = [] }) => (
  <ScrollView
    horizontal={true}
    style={[styles.bottomToolbar, styles.galleryContainer]}
  >
    <Image source={captures[0]} style={styles.galleryImage}></Image>
    {/* {captures.map(({ uri }) => (
      <View style={styles.galleryImageContainer} key={uri}>
        <Image source={{ uri }} style={styles.galleryImage} />
      </View>
    ))} */}
  </ScrollView>
);
