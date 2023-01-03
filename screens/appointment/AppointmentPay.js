import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppointmentBooked from "../../components/seed1/AppointmentBooked";
import AppText from "../../components/seed1/AppText";

export default function AppointmentPayment({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [bookedModal, setBookedModal] = useState(false);

  const goHome = () => {
    navigation.navigate("Onboard");
  };
  return (
    <View
      style={{ backgroundColor: "#Faf83F9", flex: 1, position: "relative" }}
    >
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Make Payment"
      />

      <View
        style={{
          marginTop: 20,
          width: windowWidth - 40,
          marginHorizontal: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 105,
        }}
      >
        <Image source={require("../../assets/images/DocPic.png")} />
        <AppText
          style={{
            fontWeight: "600",
            fontSize: 16,
            color: "#03045E",
            textAlign: "center",
            marginTop: 29,
          }}
        >
          You are about to pay ₦4,000 for consultation with Dr. Mildred Mathasga
        </AppText>
      </View>

      <View
        style={{
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 20,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Button
          onPressProp={() => setBookedModal(true)}
          bgColor="#0364FF"
          btnRadius={4}
          btnH={44}
          title="Pay (₦4,000)"
          txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
        />
      </View>

      <AppointmentBooked
        goHome={goHome}
        show={bookedModal}
        setBookedModal={setBookedModal}
      />
    </View>
  );
}
