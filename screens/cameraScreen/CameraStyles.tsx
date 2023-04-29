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
  permissionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  permissionsButton: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#272c34",
    justifyContent: "center",
    alignItems: "center",
  },
  permissionsText: {
    fontSize: 20,
    textAlign: "center",
  },
  permissionsBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CameraStyles;
