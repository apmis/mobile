import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS } from "../components/seed/constants";
import { Btn, LightText } from "../components/seed";

const Success = ({ route, navigation }) => {
  const { screen, successMessage, btnText, extra } = route.params;
  return (
    <View className="bg-[#f3f3f3]">
      <View className="flex h-full mt-[40%]  items-center">
        <Image resizeMode="contain" source={assets.checkmark} />
        <View className="mt-[60px] mb-10">
          <Text
            style={{
              fontFamily: "ManropeSemibold",
              color: COLORS.secondaryBlue,
            }}
            className=" text-center mb-3"
          >
            {successMessage}
          </Text>
          {extra && (
            <View className="w-[90%]">
              <LightText styling="text-center" value={extra} />
            </View>
          )}
        </View>
        <Btn
          onPressHandler={() => navigation.navigate(screen)}
          value={btnText}
        />
      </View>
    </View>
  );
};

export default Success;
