import { View, SafeAreaView, StatusBar, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { assets, COLORS } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  LightText,
  Tab,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.navigate("ResetPasswordScreen2");
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
          <Tab
            isEmailSelected={isEmailSelected}
            setIsEmailSelected={setIsEmailSelected}
          />
        </View>

        <View className="pb-10">
          {isEmailSelected ? (
            <View className="mb-5">
              <InputWithLabel labelValue="Email" placeholder="Enter email..." />
            </View>
          ) : (
            <View className="mb-5">
              <InputWithLabel
                labelValue="Phone Number"
                placeholder="Enter phone number..."
              />
            </View>
          )}

          <View className="mt-[56px] mb-[27px]">
            <Btn onPressHandler={submitHandler} value="Continue" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
