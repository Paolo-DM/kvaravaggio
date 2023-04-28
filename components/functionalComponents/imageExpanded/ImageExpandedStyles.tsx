import { StyleSheet } from "react-native";

const ImageExpandedStyles = StyleSheet.create({
  modalContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    bottom: 20,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default ImageExpandedStyles;
