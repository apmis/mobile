import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Btn, Header } from "../../../components/seed";
import { assets, COLORS } from "../../../components/seed/constants";

const HospitalPayment = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Make Payment" />
      <View className="flex-1 mt-[20%] justify-between">
        <View className="items-center w-[60%] mx-auto">
          <Image
            className="w-[153] mb-5 h-[153] rounded-2xl"
            resizeMode="cover"
            source={assets.hospital}
          />
          <Text
            style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
            className="text-base text-center"
          >
            You are about to pay $40 for Hospital Booking
          </Text>
        </View>
        <View className="mb-2">
          <Btn
            onPressHandler={() =>
              navigation.navigate("Success", {
                screen: "Dashboard",
                btnText: "Go Home",
                successMessage: "Thank You! \n Your Appointment is Created",
                extra:
                  "You booked an appoinment with Divine Hospital on July 21, at 10:00 am",
              })
            }
            value="Pay (₦40)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HospitalPayment;
