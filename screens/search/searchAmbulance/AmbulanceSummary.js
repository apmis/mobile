import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Btn, Header } from "../../../components/seed";
import { COLORS } from "../../../components/seed/constants";

const AmbulanceSummary = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Ambulance Request Summary" />
      <View className="mt-[10%] w-[90%] mx-auto space-y-6">
        {/* SEX */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Patients Gender
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            Male
          </Text>
        </View>
        {/* GENDER */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Gender is
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            Adult
          </Text>
        </View>
        {/* OXYGEN */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Need Oxygen
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            True
          </Text>
        </View>
        {/* DESCRIPTION */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Any information you would like us to know?
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            She passed out and hasn’t moved yet
          </Text>
        </View>
        {/* DISTANCE TO BE COVERED */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Distance to be covered
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            8km
          </Text>
        </View>
        {/* PICKUP DATE & TIME */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Pickup Date/Time
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            March 14, 2022, 2p.m
          </Text>
        </View>
        {/* AMBULANCE RATE */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#342525] text-base mb-1"
          >
            Ambulance Rate
          </Text>
          <Text
            style={{
              fontFamily: "ManropeBold",
              color: COLORS.secondaryBlue,
            }}
          >
            ₦4,000 per km
          </Text>
        </View>
      </View>
      <View className="mt-8 mx-auto w-[90%]">
        <Btn
          onPressHandler={() =>
            navigation.navigate("SuccessWithThanks", {
              screen: "Dashboard",
              successMessage:
                "Your Request has been placed! You will recieve an email reciept shortly",
              btnText: "Back to Home",
            })
          }
          btnWidth="100%"
          value="Make Payment"
        />
      </View>
    </SafeAreaView>
  );
};

export default AmbulanceSummary;
