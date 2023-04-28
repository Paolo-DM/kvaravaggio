import { StyleSheet } from "react-native";

const CameraStyles = StyleSheet.create({
  cameraScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  lensContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 30,
    marginBottom: 30,
  },
  cameraIcon: {
    width: 60,
    height: 60,
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 2,
  },
});

export default CameraStyles;
