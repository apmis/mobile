import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { assets, COLORS } from "./constants";

const OAuth = () => {
  return (
    <View className="flex space-y-2">
      <TouchableOpacity className="w-[90%] border-[#999999] rounded-[5px] mx-auto border-[1px] py-[15px] flex-row justify-center items-center space-x-4 bg-white">
        <Image source={assets.google} />
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.lightText }}
          className="text-base"
        >
          Login with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[90%] border-[#999999] rounded-[5px] mx-auto border-[1px] py-[15px] flex-row justify-center items-center space-x-4 bg-white">
        <Image source={assets.facebook} />
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.lightText }}
          className="text-base"
        >
          Login with Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[90%] border-[#999999] rounded-[5px] mx-auto border-[1px] py-[15px] flex-row justify-center items-center space-x-6 bg-white">
        <Image source={assets.apple} />
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.lightText }}
          className="text-base"
        >
          Login with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OAuth;
