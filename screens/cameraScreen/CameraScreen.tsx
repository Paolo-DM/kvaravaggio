import React, { FunctionComponent, useState, useRef } from "react";

// React Native
import { View, Text, Button, TouchableOpacity, Image } from "react-native";

// Expo
import { Camera, PermissionStatus, CameraType } from "expo-camera";

// Camera utils
import { takePicture } from "../../utils/cameraUtils";

// Images
const lens = require("../../assets/images/camera/lens.png");
const rotate = require("../../assets/images/camera/rotate.png");

// Styles
import CameraStyles from "./CameraStyles";

interface CameraProps {
  changeBgImage: (image: string | undefined | null) => void;
}

interface State {
  cameraType: CameraType | number;
}

const initialState: State = {
  cameraType: CameraType.back,
};

const CameraScreen: FunctionComponent<CameraProps> = (props) => {
  const [state, setState] = useState<State>(initialState);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={CameraStyles.permissionsContainer}>
        <Image source={lens} style={CameraStyles.cameraIcon} />
        <Text style={CameraStyles.permissionsText}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          style={CameraStyles.permissionsButton}
          onPress={requestPermission}
        >
          <Text style={CameraStyles.permissionsBtnText}>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const onPhotoShooting = async () => {
    const image = await takePicture(cameraRef);
    props.changeBgImage(image);
  };

  return (
    <View style={CameraStyles.cameraScreenContainer}>
      <Camera
        ratio="16:9"
        style={CameraStyles.camera}
        type={state.cameraType}
        ref={cameraRef}
      >
        <View style={CameraStyles.lensContainer}>
          <TouchableOpacity onPress={onPhotoShooting}>
            <Image source={lens} style={CameraStyles.cameraIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={rotate} style={CameraStyles.cameraIcon} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
