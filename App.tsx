// React
import React, { useEffect, useState } from "react";

// Expo
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

// React Native
import { StyleSheet, View, ActivityIndicator } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Utils
import screenOptions from "./utils/tabScreenOptions";
import { getStorage } from "./utils/localStorageUtils";

// Screens
import DrawingBoardScreen from "./screens/drawingBoardScreen/DrawingBoardScreen";
import GalleryScreen from "./screens/galleryScreen/GalleryScreen";
import Tutorial from "./screens/tutorial/Tutorial";

const Tab = createBottomTabNavigator();

interface State {
  tutorialCompleted: boolean | null;
}

const initialState: State = {
  tutorialCompleted: null,
};

const App = () => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    checkTutorialStatus();
  }, []);

  const checkTutorialStatus = async (): Promise<void> => {
    const tutorialStatus: any = await getStorage("tutorialCompleted");
    console.log("tutorialStatus", tutorialStatus);
    const tutorialCompleted = tutorialStatus === true ? true : false;
    console.log("tutorialCompleted", tutorialCompleted);
    setState({ ...state, tutorialCompleted });
  };

  return (
    <>
      {(state.tutorialCompleted === null ||
        state.tutorialCompleted === undefined) && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
      {(state.tutorialCompleted === true ||
        state.tutorialCompleted === false) && (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <StatusBar style={"light"} backgroundColor="#272c34" />

            <NavigationContainer>
              <Tab.Navigator
                screenOptions={screenOptions}
                initialRouteName={
                  state.tutorialCompleted === true
                    ? "Drawing Board"
                    : "Tutorial"
                }
              >
                <Tab.Group screenOptions={{ headerShown: false }}>
                  <Tab.Screen
                    name="Drawing Board"
                    component={DrawingBoardScreen}
                  />
                  <Tab.Screen name="Gallery" component={GalleryScreen} />
                  <Tab.Screen name="Tutorial" component={Tutorial} />
                </Tab.Group>
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
