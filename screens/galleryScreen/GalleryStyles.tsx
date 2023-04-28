import { Dimensions, StyleSheet } from "react-native";

const GalleryStyles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default GalleryStyles;
