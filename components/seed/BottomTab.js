import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dashboard } from "../../screens";
import { COLORS } from "./constants";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryBlue,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === "ios" ? 20 : 4,
          height: Platform.OS === "ios" ? 80 : 60,
        },
        tabBarLabelStyle: { fontFamily: "ManropeRegular" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Dashboard}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="chatbox" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Dashboard}
        options={{
          tabBarLabel: "Buy",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={Dashboard}
        options={{
          tabBarLabel: "Read",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="View"
        component={Dashboard}
        options={{
          tabBarLabel: "View",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
