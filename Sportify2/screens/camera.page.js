import React from "react";
import { View, Text } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import styles from "../styles/styles";
import Toolbar from "./toolbar.component";
import Gallery from "./gallery.component";

export default class CameraPage extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "black",
      borderColor: "black"
    }
  };

  camera = null;
  constructor(props) {
    super(props);
    this.state = {
      captures: global.pictures,
      capturing: null,
      hasCameraPermission: null,
      cameraType: Camera.Constants.Type.back,
      flashMode: Camera.Constants.FlashMode.off
    };
  }
  // state = {
  //   captures: [],
  //   capturing: null,
  //   hasCameraPermission: null,
  //   cameraType: Camera.Constants.Type.back,
  //   flashMode: Camera.Constants.FlashMode.off
  // };

  setFlashMode = flashMode => this.setState({ flashMode });
  setCameraType = cameraType => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  //   handleCaptureOut = () => {
  //     if (this.state.capturing) this.camera.stopRecording();
  //   };

  handleShortCapture = async () => {
    let capture = global.pictures;
    const photoData = await this.camera.takePictureAsync();
    this.setState({
      capturing: false,
      captures: [photoData, ...this.state.captures]
    });
    capture.push([photoData, ...capture]);
    console.log(this.state.captures);
  };

  //   handleLongCapture = async () => {
  //     const videoData = await this.camera.recordAsync();
  //     this.setState({
  //       capturing: false,
  //       captures: [videoData, ...this.state.captures]
  //     });
  //   };

  //Tjekker og spørger om vi må få lov at bruge kamera og optage video/lyd
  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission =
      camera.status === "granted" && audio.status === "granted";

    this.setState({ hasCameraPermission: hasCameraPermission });
  }

  render() {
    //console.log(captures);

    const {
      hasCameraPermission,
      flashMode,
      cameraType,
      capturing,
      captures
    } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    }

    return (
      //React.Fragment så kan du bruge flere childrens uden en parent wrapper. Du bruger flere elementer uden et forældre komponent.

      <React.Fragment>
        <View>
          <Camera
            type={cameraType}
            flashMode={flashMode}
            style={styles.preview}
            ref={camera => (this.camera = camera)}
          />
        </View>

        {captures.length > 0 && <Gallery captures={captures} />}

        {/* Her modtager jeg mine props, og sætter deres værdi til hvad jeg ønsker i min "Parent" */}
        <Toolbar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onCaptureIn={this.handleCaptureIn}
          onCaptureOut={this.handleCaptureOut}
          onLongCapture={this.handleLongCapture}
          onShortCapture={this.handleShortCapture}
        />
      </React.Fragment>
    );
  }
}
