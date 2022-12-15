import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { assets, COLORS } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  LightBlueText,
  LightText,
  OAuth,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.navigate("SignUpScreen2");
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
          <BoldText value="Create a new account" />
          <View className="flex-row ">
            <LightText value="Already have an account?" />
            <Pressable onPress={() => navigation.navigate("Login")}>
              <LightBlueText styling={"pl-1"} value="Login" />
            </Pressable>
          </View>
        </View>
        <View className="mt-[30px]">
          <OAuth />
        </View>
        {/*---------------------- OR Bar------------------- */}
        <View className="flex-row mt-4 mb-[30px] w-[90%] px-4 mx-auto items-center justify-center space-x-1">
          <View className="h-[1px] w-1/2 bg-[#666666]" />
          <Text style={{ fontFamily: "ManropeBold" }}>OR</Text>
          <View className="h-[1px] w-1/2 bg-[#666666]" />
        </View>
        {/* ----------------------------------------------------- */}
        <View className="pb-16">
          <View className="mb-5">
            <InputWithLabel
              labelValue="Full Name"
              placeholder="Enter full name..."
            />
          </View>
          <View className="mb-5">
            <InputWithLabel labelValue="Email" placeholder="Enter email..." />
          </View>
          <View className="mb-5">
            <InputWithLabel
              labelValue="Phone Number"
              placeholder="Enter phone number..."
            />
          </View>

          <View className="mb-5">
            <InputWithLabel
              labelValue="Password"
              placeholder="Enter password..."
            />
          </View>
          <View className="mb-10">
            <InputWithLabel
              labelValue="Confirm Password"
              placeholder="Re-type password..."
            />
          </View>
          <Btn onPressHandler={submitHandler} value="Sign Up" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
