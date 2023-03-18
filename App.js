import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalizeProvider } from "react-native-globalize";
import { loadCldr } from "react-native-globalize";
import BottomTab from "./components/seed/BottomTab";
loadCldr(require("react-native-globalize/locale-data/en-NG"));
import {
  AmbulanceForm,
  AmbulanceSummary,
  AmbulanceTime,
  BlogDetails,
  BlogHome,
  Conversation,
  Dashboard,
  ForumDetails,
  Forums,
  FundWallet,
  Home,
  HospitalAppointment,
  HospitalDirection,
  HospitalPayment,
  Login,
  Notifications,
  NotificationSettings,
  Onboard,
  PasswordSettings,
  PatientProfile,
  Replies,
  ResetPassword,
  ResetPasswordScreen2,
  ResetPasswordScreen3,
  SearchAmbulanceHome,
  SearchDoctorHome,
  SearchHospitalHome,
  SearchPharmacyHome,
  Settings,
  SignUp,
  SignUpScreen2,
  Success,
  SuccessWithThanks,
  VideoCall,
  Wallet,
} from "./screens";

import DrugsTaken from "./screens/prescriptions/DrugsTaken";
import Prescriptions from "./screens/prescriptions/Prescriptions";
import PrescriptionData from "./screens/prescriptions/PrescriptionData";

import MedicalProfile from "./screens/MedicalProfile";
import HealthInsurance from "./screens/insurance/HealthInsurance";
import GetInsured from "./screens/insurance/GetInsured";
import ProviderDetails from "./screens/insurance/ProviderDetails";
import ClinicalNotes from "./screens/ClinicalNotes";
import BookAppointment from "./screens/appointment/BookAppointment";
import AppointmentDate from "./screens/appointment/AppointmentDate";
import AppointmentPay from "./screens/appointment/AppointmentPay";
import AppointmentList from "./screens/appointment/AppointmentList";
import LabResult from "./screens/lab/LabResult";
import LabTestRequest from "./screens/lab/LabTestRequest";
import LabRequestMade from "./screens/lab/LabRequestMade";
import ReferPerson from "./screens/ReferPerson";
import ReferralMade from "./screens/ReferralMade";
import { Provider } from "react-redux";
import Bills from "./screens/Bills";
import Products from "./screens/products/Products";
import ProductDetails from "./screens/products/ProductDetails";
import OrderPlaced from "./screens/products/OrderPlaced";
import CartDetails from "./screens/products/CartDetails";
import PolicyDetails from "./screens/insurance/PolicyDetails";
import ClaimDetails from "./screens/insurance/ClaimDetails";
import AuthorizationDetails from "./screens/insurance/AuthorizationDetails";
import MedicalRecords from "./screens/medicalRecords/MedicalRecords";
// import PayWithPaystack from "./screens/payment/PayWithPaystack";
// import Payment from "./screens/payment/Payment";
import ImagingRequest from "./screens/imaging/ImagingRequest";
import ImagingRequestMade from "./screens/imaging/ImagingRequestMade";
import BloodRequest from "./screens/blood/BloodRequest";
import BloodRequestMade from "./screens/blood/BloodRequestMade";
import BloodRequestList from "./screens/blood/BloodRequestList";
import BloodDetails from "./screens/blood/BloodDetails";
import store from "./redux/store";

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
              initialRouteName="Onboard"
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
              <Stack.Screen name="ChatHome" component={Home} />
              <Stack.Screen name="Conversation" component={Conversation} />
              <Stack.Screen name="VideoCall" component={VideoCall} />
              <Stack.Screen name="BlogDetails" component={BlogDetails} />
              <Stack.Screen name="BlogHome" component={BlogHome} />
              <Stack.Screen name="Forums" component={Forums} />
              <Stack.Screen name="ForumDetails" component={ForumDetails} />
              <Stack.Screen name="Replies" component={Replies} />
              <Stack.Screen name="AmbulanceForm" component={AmbulanceForm} />
              <Stack.Screen name="AmbulanceTime" component={AmbulanceTime} />
              <Stack.Screen
                name="HospitalPayment"
                component={HospitalPayment}
              />
              <Stack.Screen
                name="HospitalAppointment"
                component={HospitalAppointment}
              />
              <Stack.Screen
                name="HospitalDirection"
                component={HospitalDirection}
              />
              <Stack.Screen
                name="AmbulanceSummary"
                component={AmbulanceSummary}
              />
              <Stack.Screen
                // options={{ presentation: "containedTransparentModal" }}
                name="SearchHospitalHome"
                component={SearchHospitalHome}
              />
              <Stack.Screen
                // options={{ presentation: "containedTransparentModal" }}
                name="SearchDoctorHome"
                component={SearchDoctorHome}
              />
              <Stack.Screen
                // options={{ presentation: "containedTransparentModal" }}
                name="SearchAmbulanceHome"
                component={SearchAmbulanceHome}
              />
              <Stack.Screen
                // options={{ presentation: "containedTransparentModal" }}
                name="SearchPharmacyHome"
                component={SearchPharmacyHome}
              />
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
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="CartDetails" component={CartDetails} />
              {/* PRODUCTS ENDS */}
              {/* REFERRER */}
              <Stack.Screen name="ReferPerson" component={ReferPerson} />
              <Stack.Screen name="ReferralMade" component={ReferralMade} />
              {/* REFERRER ENDS */}
              {/* LAB */}
              <Stack.Screen name="LabTestRequest" component={LabTestRequest} />
              <Stack.Screen name="LabRequestMade" component={LabRequestMade} />
              <Stack.Screen name="LabResult" component={LabResult} />
              {/* LAB ENDS */}
              {/* IMAGING */}
              <Stack.Screen name="ImagingRequest" component={ImagingRequest} />
              <Stack.Screen
                name="ImagingRequestMade"
                component={ImagingRequestMade}
              />
              {/* <Stack.Screen name="LabResult" component={LabResult} /> */}
              {/* IMAGING ENDS */}
              {/* BLOOD */}
              <Stack.Screen name="BloodRequest" component={BloodRequest} />
              <Stack.Screen
                name="BloodRequestMade"
                component={BloodRequestMade}
              />
              <Stack.Screen
                name="BloodRequestList"
                component={BloodRequestList}
              />
              <Stack.Screen name="BloodDetails" component={BloodDetails} />
              {/* BLOOD ENDS */}
              {/* APPOINTMENT */}
              <Stack.Screen
                name="BookAppointment"
                component={BookAppointment}
              />
              <Stack.Screen name="AppointmentPay" component={AppointmentPay} />
              <Stack.Screen
                name="AppointmentDate"
                component={AppointmentDate}
              />
              <Stack.Screen
                name="AppointmentList"
                component={AppointmentList}
              />
              {/* APPOINTMENT ENDS */}
              {/* CLINICAL NOTES */}
              <Stack.Screen name="ClinicalNotes" component={ClinicalNotes} />
              {/* CLINICAL NOTES ENDS */}
              {/* PRESCRIPTIONS */}
              <Stack.Screen name="Prescriptions" component={Prescriptions} />
              <Stack.Screen
                name="PrescriptionData"
                component={PrescriptionData}
              />
              <Stack.Screen name="DrugsTaken" component={DrugsTaken} />
              {/* PRESCRIPTIONS ENDS */}
              {/* INSURANCE */}
              <Stack.Screen name="GetInsured" component={GetInsured} />
              <Stack.Screen name="PolicyDetails" component={PolicyDetails} />
              <Stack.Screen name="ClaimDetails" component={ClaimDetails} />
              <Stack.Screen
                name="AuthorizationDetails"
                component={AuthorizationDetails}
              />
              <Stack.Screen
                name="ProviderDetails"
                component={ProviderDetails}
              />
              <Stack.Screen
                name="HealthInsurance"
                component={HealthInsurance}
              />
              {/* INSURANCE ENDS */}
              {/* BILLS */}
              <Stack.Screen name="Bills" component={Bills} />
              {/* BILLS ENDS */}
              {/* MEDICAL PROFILE */}
              <Stack.Screen name="MedicalProfile" component={MedicalProfile} />
              {/* MEDICAL PROFILE ENDS */}
              {/* OTHER */}
              {/* <Stack.Screen name="Others" component={Other} /> */}
              <Stack.Screen name="MedicalRecords" component={MedicalRecords} />
              {/* OTHER ENDS */}
              {/* PAYMENT */}
              {/* FIXME: */}
              {/* <Stack.Screen
                name="PayWithPaystack"
                component={PayWithPaystack}
              />
              <Stack.Screen name="Payment" component={Payment} /> */}
              {/* PAYMENT ENDS */}
            </Stack.Navigator>
          </NavigationContainer>
        </GlobalizeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
