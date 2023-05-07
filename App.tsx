// React
import React, { useEffect, useState, useCallback } from "react";

// Expo
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

// React Native
import { StyleSheet, View } from "react-native";

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
  appIsReady: boolean;
}

const initialState: State = {
  tutorialCompleted: null,
  appIsReady: false,
};

// Makes the splash screen remain visible until hideAsync is called
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [state, setState] = useState<State>(initialState);

  const checkTutorialStatus = async (): Promise<boolean> => {
    try {
      const tutorialCompleted = await getStorage("tutorialCompleted");
      console.log("tutorialCompleted", tutorialCompleted);
      return tutorialCompleted;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  useEffect(() => {
    async function prepare() {
      let tutorialCompleted = false;

      try {
        // Pre-load fonts, make any API calls you need to do here
        tutorialCompleted = await checkTutorialStatus();

        // Artificially delay for two seconds to simulate a slow loading
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.log("App loading error:");
      } finally {
        // Tell the application to render
        setState({ ...state, appIsReady: true, tutorialCompleted });
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (state.appIsReady) {
      // We hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [state.appIsReady]);

  if (!state.appIsReady) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style={"light"} backgroundColor="#272c34" />

          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}
              initialRouteName={
                state.tutorialCompleted === true ? "Drawing Board" : "Tutorial"
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
