// React
import React from "react";

// React Native
import { View, Text, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// Local Storage Utils
import { setStorage } from "../../utils/localStorageUtils";

// Images
import { tutorialImages, skipTutorialIcon } from "../../utils/tutorialUtils";

// Styles
import TutorialStyles from "./TutorialStyles";

const Tutorial = (props: any) => {
  // const navigation: any = useNavigation();

  // const skipTutorial = () => {
  //   navigation.navigate("Drawing Board");
  // };

  function mapTutorialScreen(screen: Image, index: number) {
    return (
      <View
        style={TutorialStyles.imageContainer}
        key={index + 1}
        collapsable={false}
      >
        <Image
          resizeMode="contain"
          source={tutorialImages[index]}
          style={TutorialStyles.tutorialImage}
        />
      </View>
    );
  }

  const setTutorialStatus = async () => {
    await setStorage("tutorialCompleted", true);
    props.navigation.navigate("Drawing Board");
  };

  return (
    <>
      <View style={TutorialStyles.tutorialContainer}>
        <TouchableOpacity
          style={TutorialStyles.skipButton}
          onPress={setTutorialStatus}
        >
          <Text style={TutorialStyles.skipButtonText}>Close</Text>
          <Image
            source={skipTutorialIcon}
            style={TutorialStyles.skipButtonIcon}
          />
        </TouchableOpacity>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          orientation={"horizontal"}
          scrollEnabled={true}
        >
          {tutorialImages.map(mapTutorialScreen)}
        </PagerView>
      </View>
    </>
  );
};

export default Tutorial;
