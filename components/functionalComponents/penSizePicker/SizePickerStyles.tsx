import { StyleSheet } from "react-native";

const SizePickerStyles = StyleSheet.create({
  sizePickerContainer: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bebdbe",
  },
  sizePickerButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sizePickerButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sizePickerIcon: {
    width: 30,
    height: 30,
  },
});

export default SizePickerStyles;
