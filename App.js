import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalizeProvider } from "react-native-globalize";
import { loadCldr } from "react-native-globalize";
import BottomTab from "./components/seed/BottomTab";
loadCldr(require("react-native-globalize/locale-data/en-NG"));
import {
  Dashboard,
  FundWallet,
  Login,
  Notifications,
  NotificationSettings,
  Onboard,
  PasswordSettings,
  PatientProfile,
  ResetPassword,
  ResetPasswordScreen2,
  ResetPasswordScreen3,
  Settings,
  SignUp,
  SignUpScreen2,
  Success,
  SuccessWithThanks,
  Wallet,
} from "./screens";

import DrugsTaken from "./screens/DrugsTaken";
import Prescriptions from "./screens/Prescriptions";
import PrescriptionsData from "./screens/PrescriptionsData";
import MedicalProfile from "./screens/MedicalProfile";
import HealthInsurance from "./screens/HealthInsurance";
import GetInsured from "./screens/GetInsured";
import ProviderDetails from "./screens/ProviderDetails";
import ClinicalNotes from "./screens/ClinicalNotes";
import BookAppointment from "./screens/BookAppointment";
import AppointmentDate from "./screens/AppointmentDate";
import AppointmentPay from "./screens/AppointmentPay";
import AppointmentList from "./screens/AppointmentList";
import LabResult from "./screens/LabResult";
import LabTestRequest from "./screens/LabTestRequest";
import LabRequestMade from "./screens/LabRequestMade";
import ReferPerson from "./screens/ReferPerson";
import ReferralMade from "./screens/ReferralMade";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Bills from "./screens/Bills";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import OrderPlaced from "./screens/OrderPlaced";

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    ManropeExtralight: require("./assets/fonts/Manrope-ExtraLight.ttf"),
    ManropeLight: require("./assets/fonts/Manrope-Light.ttf"),
    ManropeRegular: require("./assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("./assets/fonts/Manrope-Medium.ttf"),
    ManropeSemibold: require("./assets/fonts/Manrope-SemiBold.ttf"),
    ManropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
    ManropeExtrBold: require("./assets/fonts/Manrope-ExtraBold.ttf"),
  });
  // useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GlobalizeProvider locale="en-NG">
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Dashboard"
            >
              {/* Add screen stack here 👇*/}
              {/* =================================================== */}
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} />
              <Stack.Screen name="Success" component={Success} />
              <Stack.Screen
                name="SuccessWithThanks"
                component={SuccessWithThanks}
              />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Onboard" component={Onboard} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen
                name="PasswordSettings"
                component={PasswordSettings}
              />
              <Stack.Screen name="PatientProfile" component={PatientProfile} />
              <Stack.Screen name="Wallet" component={Wallet} />
              <Stack.Screen name="FundWallet" component={FundWallet} />
              <Stack.Screen name="Dashboard" component={BottomTab} />
              <Stack.Screen name="Notifications" component={Notifications} />

              <Stack.Screen
                name="NotificationSettings"
                component={NotificationSettings}
              />
              <Stack.Screen
                name="ResetPasswordScreen2"
                component={ResetPasswordScreen2}
              />
              <Stack.Screen
                name="ResetPasswordScreen3"
                component={ResetPasswordScreen3}
              />
              {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}

              {/* ==============================TOLA========================= */}
              
              <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="ReferPerson" component={ReferPerson} />
              <Stack.Screen name="ReferralMade" component={ReferralMade} />
              <Stack.Screen name="LabTestRequest" component={LabTestRequest} />
              <Stack.Screen name="LabRequestMade" component={LabRequestMade} />
              <Stack.Screen name="LabResult" component={LabResult} />
              <Stack.Screen
                name="AppointmentList"
                component={AppointmentList}
              />
              <Stack.Screen name="ClinicalNotes" component={ClinicalNotes} />
              <Stack.Screen
                name="PrescriptionsData"
                component={PrescriptionsData}
              />
              <Stack.Screen name="GetInsured" component={GetInsured} />
              <Stack.Screen
                name="ProviderDetails"
                component={ProviderDetails}
              />
              <Stack.Screen
                name="HealthInsurance"
                component={HealthInsurance}
              />
              <Stack.Screen name="DrugsTaken" component={DrugsTaken} />
              <Stack.Screen name="Prescriptions" component={Prescriptions} />
              <Stack.Screen
                name="AppointmentDate"
                component={AppointmentDate}
              />
              <Stack.Screen name="AppointmentPay" component={AppointmentPay} />
              <Stack.Screen
                name="BookAppointment"
                component={BookAppointment}
              />
            
              <Stack.Screen name="Bills" component={Bills} />
              <Stack.Screen name="MedicalProfile" component={MedicalProfile} />
            </Stack.Navigator>
          </NavigationContainer>
        </GlobalizeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
