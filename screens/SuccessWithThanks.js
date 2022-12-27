import { View, Text, Image, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { assets, COLORS } from "../components/seed/constants";
import { Backbtn, Btn, Header } from "../components/seed";
const SuccessWithThanks = ({ route, navigation }) => {
  const { screen, successMessage, btnText } = route.params;
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      <View className="relative">
        <Header title="Thank You!" />
      </View>
      <View className="flex h-full mt-[40%] items-center">
        <Image resizeMode="contain" source={assets.checkmark} />
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.secondaryBlue }}
          className="mt-[60px] mb-10"
        >
          {successMessage}
        </Text>
        <Btn
          onPressHandler={() => navigation.navigate(screen)}
          value={btnText}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessWithThanks;
