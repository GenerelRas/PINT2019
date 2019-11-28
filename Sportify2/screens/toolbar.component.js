import React from "react";

import { Camera } from "expo-camera";

//Vector filer for UI
import { Ionicons } from "@expo/vector-icons";

//Easy Grid på flexbox
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import styles from "../styles/styles";

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

// Funktions Komponent, Renderer kun View baseret på props den får, og på interaktion delegerer den events til dens parent, her er det camera.page
export default ({
  capturing = false,
  cameraType = CameraTypes.back,
  flashMode = CameraFlashModes.off,
  setFlashMode,
  setCameraType,
  onCaptureIn,
  onCaptureOut,
  onLongCapture,
  onShortCapture
}) => (
  <Grid style={styles.bottomToolbar}>
    <Row>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setFlashMode(
              flashMode === CameraFlashModes.on
                ? CameraFlashModes.off
                : CameraFlashModes.on
            )
          }
        >
          <Ionicons
            name={
              flashMode == CameraFlashModes.on ? "md-flash" : "md-flash-off"
            }
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </Col>
      <Col size={2} style={styles.alignCenter}>
        <TouchableWithoutFeedback
          onPressIn={onCaptureIn}
          onPressOut={onCaptureOut}
          onLongPress={onLongCapture}
          onPress={onShortCapture}
        >
          <View
            style={[styles.captureBtn, capturing && styles.captureBtnActive]}
          >
            {capturing && <View style={styles.captureBtnInternal} />}
          </View>
        </TouchableWithoutFeedback>
      </Col>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setCameraType(
              cameraType === CameraTypes.back
                ? CameraTypes.front
                : CameraTypes.back
            )
          }
        >
          <Ionicons name="md-reverse-camera" color="white" size={30} />
        </TouchableOpacity>
      </Col>
    </Row>
  </Grid>
);
