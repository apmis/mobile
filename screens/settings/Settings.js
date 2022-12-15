import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { assets } from "../../components/seed/constants";
import { Backbtn } from "../../components/seed";
const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      <View className="relative ">
        <Backbtn />
        <Text
          style={{ fontFamily: "ManropeSemibold" }}
          className="text-base text-center text-[#070C18]"
        >
          Settings
        </Text>
      </View>
      <View className="w-[90%] mt-14 mx-auto flex-row space-x-2">
        {/* ------------------LEFT------------------- */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PasswordSettings")}
          className="w-[48%] rounded-2xl flex items-center pt-10 pb-7 bg-white"
        >
          <Image source={assets.lock} />
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-base mt-[30px] text-center text-[#070C18]"
          >
            Password settings
          </Text>
        </TouchableOpacity>
        {/* ------------------RIGHT------------------- */}
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationSettings")}
          className="w-[48%] basis-1/2 rounded-2xl flex items-center pt-10 pb-7 bg-white"
        >
          <Image source={assets.bell} />
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-base mt-[30px] text-center text-[#070C18]"
          >
            Notification settings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
