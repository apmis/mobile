import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS } from "../components/seed/constants";
import { Btn } from "../components/seed";

const Success = ({ route, navigation }) => {
  const { screen, successMessage, btnText } = route.params;
  return (
    <View className="flex h-full mt-[40%] items-center">
      <Image resizeMode="contain" source={assets.checkmark} />
      <Text
        style={{ fontFamily: "ManropeSemibold", color: COLORS.secondaryBlue }}
        className="mt-[60px] mb-10"
      >
        {successMessage}
      </Text>
      <Btn onPressHandler={() => navigation.navigate(screen)} value={btnText} />
    </View>
  );
};

export default Success;
