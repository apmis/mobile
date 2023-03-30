import { View, SafeAreaView, StatusBar, Image, ScrollView } from "react-native";
import React from "react";
import { assets, COLORS } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  LightText,
  Tab,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen3 = () => {
  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.navigate("Success", {
      screen: "Dashboard",
      successMessage: "Password Reset Successful",
      btnText: "Proceed to Login",
    });
  };
  return (
    <SafeAreaView className="">
      <StatusBar backgroundColor={COLORS.primaryBlue} barStyle={""} />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="pt-6 px-8">
          <Image
            className="mb-11"
            source={assets.apmisFullLogo}
            resizeMode="contain"
          />
          <BoldText value="Password reset" />
          <View className="mt-2 ">
            <LightText value="Please enter your registered phone number or email" />
          </View>
        </View>
        <View className="my-[34px]">
          <View className="mb-5">
            <InputWithLabel
              labelValue="New Password"
              placeholder="Enter password..."
            />
          </View>
          <View className="mb-10">
            <InputWithLabel
              labelValue="Confirm New Password"
              placeholder="Re-type password..."
            />
          </View>
          <Btn onPressHandler={submitHandler} value="Continue" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen3;
