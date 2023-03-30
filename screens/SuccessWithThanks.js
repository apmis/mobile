import { View, Text, Image, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { assets, COLORS } from "../components/seed/constants";
import { Backbtn, Btn, Header } from "../components/seed";
import { useDispatch } from "react-redux";
import { updateProfileStatus } from "../redux/slices/userSlice";
const SuccessWithThanks = ({ route, navigation }) => {
  const { screen, successMessage, btnText } = route.params;
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="mt-[7%] bg-[#f3f3f3]">
      <View className="relative">
        <Header title="Thank You!" />
      </View>
      <View className="flex h-full mt-[40%] items-center">
        <Image resizeMode="contain" source={assets.checkmark} />
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.secondaryBlue }}
          className="mt-[60px] w-[90%] mb-10"
        >
          {successMessage}
        </Text>
        <Btn
          onPressHandler={() => {
            dispatch(updateProfileStatus);
            navigation.navigate(screen);
          }}
          value={btnText}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessWithThanks;
