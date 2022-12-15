import { View, Text, Image } from "react-native";
import React from "react";
import { assets } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  LightBlueText,
  LightText,
  OtpInput,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen2 = () => {
  const navigation = useNavigation();

  const verifyHandler = () => {
    navigation.navigate("Success", {
      screen: "Dashboard",
      successMessage: "Account Created Succesfully",
      btnText: "Go to Dashboard",
    });
  };
  return (
    <View className="pt-6 px-7">
      <Image
        className="mb-11"
        source={assets.apmisFullLogo}
        resizeMode="contain"
      />

      <BoldText value="Verify your email" />
      <Text className="mt-[14px] mb-[29px] ">
        <LightText
          value={`Please enter the six digit code that was sent to your email `}
        />
        <LightBlueText styling={"pl-1"} value="example@email.com" />
      </Text>
      <OtpInput />
      <Text className="my-[34px] mx-auto">
        <LightText value="Didn’t get any message, " />
        <LightBlueText value="Resend" />
      </Text>
      <Btn onPressHandler={verifyHandler} value="Verify" />
    </View>
  );
};

export default SignUpScreen2;
