import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Btn, Header, InputWithLabel } from "../../../components/seed";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
const AmbulanceTime = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Set PickUp  Date and Time" />
      <View className="mt-[10%] w-[90%] mx-auto">
        <Text
          style={{ fontFamily: "ManropeRegular" }}
          className="text-[#342525] text-base"
        >
          Select date
        </Text>
        {/* CALENDAR */}
        <View className="my-6">
          <Calendar
            enableSwipeMonths={true}
            theme={{ arrowColor: "#0364FF", todayTextColor: "#0364FF" }}
          />
        </View>
        <InputWithLabel
          labelValue="Time"
          placeholder="Select time..."
          width="100%"
        />
        <View className="mt-6">
          <Btn
            onPressHandler={() => navigation.navigate("AmbulanceSummary")}
            value="Continue"
            btnWidth="100%"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AmbulanceTime;
