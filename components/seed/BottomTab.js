import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  BlogHome,
  Dashboard,
  Home,
  PatientProfile,
  Settings,
  Wallet,
} from "../../screens";
import Buy from "../../screens/buy";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Others from "../../screens/view/Others";
import { COLORS } from "./constants";
import CustomDrawer from "./CustomDrawer";

function BottomTab() {
  const Tab = createBottomTabNavigator();
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
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatHome"
        component={Home}
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
        component={Buy}
        options={{
          tabBarLabel: "Buy",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={BlogHome}
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
        component={Others}
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

export const Dash = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: COLORS.primaryBlue,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,
            // fontFamily: "Roboto-Medium",
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={BottomTab}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="My Profile"
          component={Others}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Wallet"
          component={Wallet}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="wallet-outline" size={22} color={color} />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// export default Dash;
