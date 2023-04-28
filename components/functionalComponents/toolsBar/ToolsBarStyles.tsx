import { StyleSheet } from "react-native";

const ToolsBarStyles = StyleSheet.create({
  ToolsBarContainer: {
    height: 70,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  ToolsBarContainerTop: {},
  ToolsBarContainerBottom: {},
  IconWrapper: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 8,
    borderColor: "#d6d9dc",
  },
});

export default ToolsBarStyles;
