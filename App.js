import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Onboard } from "./screens";
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
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Products"
        >
          {/* Add screen stack here 👇*/}
          {/* =================================================== */}
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ReferPerson" component={ReferPerson} />
          <Stack.Screen name="ReferralMade" component={ReferralMade} />
          <Stack.Screen name="LabTestRequest" component={LabTestRequest} />
          <Stack.Screen name="LabRequestMade" component={LabRequestMade} />
          <Stack.Screen name="LabResult" component={LabResult} />
          <Stack.Screen name="AppointmentList" component={AppointmentList} />
          <Stack.Screen name="ClinicalNotes" component={ClinicalNotes} />
          <Stack.Screen
            name="PrescriptionsData"
            component={PrescriptionsData}
          />
          <Stack.Screen name="GetInsured" component={GetInsured} />
          <Stack.Screen name="ProviderDetails" component={ProviderDetails} />
          <Stack.Screen name="HealthInsurance" component={HealthInsurance} />
          <Stack.Screen name="DrugsTaken" component={DrugsTaken} />
          <Stack.Screen name="Prescriptions" component={Prescriptions} />
          <Stack.Screen name="AppointmentDate" component={AppointmentDate} />
          <Stack.Screen name="AppointmentPay" component={AppointmentPay} />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
          <Stack.Screen name="AppointmentDate" component={AppointmentDate} />
          <Stack.Screen name="Bills" component={Bills} />
          <Stack.Screen name="MedicalProfile" component={MedicalProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
