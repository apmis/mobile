import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useFonts } from "expo-font";
import { Onboard } from "./screens";
const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboard"
      >
        {/* Add screen stack here 👇*/}
        {/* =================================================== */}
        <Stack.Screen name="Onboard" component={Onboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
