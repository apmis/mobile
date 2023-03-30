import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Btn, Header, Label, LightText } from "../../../components/seed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS } from "../../../components/seed/constants";
const APPOINTMENT_TIME = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
];
const HospitalAppointment = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  //   const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  /*  MISCELLANEOUS
    const showMode = (currentMode) => {
      if (Platform.OS === "android") {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  useEffect(() => {
    showMode("date");
  }, []); */

  return (
    <SafeAreaView className="flex-1 pt-[7%] bg-[#f3f3f3]">
      <Header title="Book Appointment" />
      <View className="mt-[8%] w-[90%] mx-auto">
        {/* CALENDAR */}
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{ backgroundColor: COLORS.primaryBlue }}
          className={`py-2 rounded-[4px] w-full mx-auto flex-row justify-center items-center`}
        >
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-base text-white"
          >
            Choose Appointment Date
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        {/* TIME */}
        <View className="my-5">
          <Text
            className="text-base "
            style={{ fontFamily: "ManropeMedium", color: COLORS.secondaryBlue }}
          >
            Available Time
          </Text>
          <View className="mt-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row pt-2 gap-2 items-center  flex-wrap w-[500]">
                {APPOINTMENT_TIME.map((time, i) => (
                  <View className="" key={i.toString()}>
                    <TouchableOpacity
                      onPress={() => setSelectedTime(time)}
                      className={`h-10  w-[100] flex justify-center ${
                        selectedTime === time
                          ? "bg-[#0364FF]"
                          : "border-[1px] border-gray-300"
                      } items-center rounded-xl `}
                    >
                      <Text
                        style={{
                          fontFamily: "ManropeRegular",
                          color: selectedTime === time ? "white" : "#6D7589",
                        }}
                      >
                        {time}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        {/* SYMPTOPMS */}
        <View className="">
          <View className="ml-2">
            <Label value="Symptoms" />
          </View>
          <TextInput
            style={{ fontFamily: "ManropeRegular", textAlignVertical: "top" }}
            className={`w-[95%]   mt-[2] bg-transparent h-[180] ${
              isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
            } text-[#6D7589] text-sm px-6 py-4 mx-auto mb-8  border-[1px]`}
            placeholder="Enter how you are feeling"
            multiline={true}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            //   keyboardType={keyboardType}
            //   onChangeText={changeHandler}
            //   value={value}Syptoms
          />
        </View>
        {/* BUTTON */}
        <Btn
          onPressHandler={() => navigation.navigate("HospitalPayment")}
          value="Proceed"
          btnWidth="95%"
        />
      </View>
    </SafeAreaView>
  );
};

export default HospitalAppointment;
