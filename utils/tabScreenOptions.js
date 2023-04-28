import Ionicons from "react-native-vector-icons/Ionicons";

const screenOptions = ({ route }) => ({
  tabBarStyle: {
    backgroundColor: "#272c34",
    borderTopColor: "transparent",
  },
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Drawing Board") {
      iconName = focused ? "brush" : "brush-outline";
    } else if (route.name === "Gallery") {
      iconName = focused ? "images" : "images-outline";
    } else if (route.name === "Tutorial") {
      iconName = focused ? "book" : "book-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#61dafb",
  tabBarInactiveTintColor: "white",
});

export default screenOptions;
