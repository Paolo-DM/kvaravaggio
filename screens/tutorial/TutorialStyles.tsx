import { StyleSheet } from "react-native";

const TutorialStyles = StyleSheet.create({
  tutorialContainer: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
  },
  skipButton: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    gap: 10,
    top: 10,
    right: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bebdbe",
    padding: 5,
  },
  skipButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  skipButtonIcon: {
    width: 28,
    height: 28,
  },

  tutorialImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TutorialStyles;
