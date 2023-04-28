import { StyleSheet } from "react-native";

const ImageCardStyles = StyleSheet.create({
  imageCardContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageCard: {
    borderRadius: 10,
    width: "96%",
    height: 260,
    marginVertical: 5,
    position: "relative",
  },
  cardIconContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
  },
  deleteIconContainer: {
    position: "absolute",
    top: 115,
    left: 35,
  },
  expandIconContainer: {
    position: "absolute",
    top: 115,
    left: 95,
  },
});

export default ImageCardStyles;
