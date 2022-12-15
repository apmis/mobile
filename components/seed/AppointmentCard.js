import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS } from "./constants";
import IonIcon from "react-native-vector-icons/Ionicons";

const AppointmentCard = () => {
  return (
    <View
      style={{ backgroundColor: COLORS.primaryBlue }}
      className={`w-[90%] rounded-[10px] px-[21] py-[30] relative mx-auto h-[193]`}
    >
      <Image className="absolute" source={assets.appointmentCardGradient} />
      <View className="relative z-10">
        <View className="flex-row justify-between">
          <View className="flex-row space-x-2">
            <Image source={assets.calendarTick} />
            <Text
              style={{ fontFamily: "ManropeRegular" }}
              className="text-white"
            >
              14 December 2022
            </Text>
          </View>
          <TouchableOpacity>
            <IonIcon name="chevron-forward" color="white" size={16} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-[9] space-x-2">
          <Image source={assets.clock} />
          <Text style={{ fontFamily: "ManropeRegular" }} className="text-white">
            08:00 AM -10:00 AM
          </Text>
        </View>
        <View className="bg-white flex-row items-center justify-between rounded-[15px] py-[10] pl-[10] pr-5 my-[28]">
          <View className="flex-row items-center space-x-2 ">
            <Image
              className="w-10 h-10 rounded-full"
              source={assets.profilePic}
            />
            <View>
              <Text className="text-[18]" style={{ fontFamily: "ManropeBold" }}>
                Dr. Christian
              </Text>
              <Text
                className="text-[#727A83]  text-[12]"
                style={{ fontFamily: "ManropeRegular" }}
              >
                Psychatrist
              </Text>
            </View>
          </View>
          <IonIcon name="md-chatbox-ellipses-outline" color="black" size={20} />
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;
