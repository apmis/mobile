import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { assets, COLORS } from "../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  LightBlueText,
  LightText,
  OAuth,
  Tab,
} from "../components/seed";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(true);

  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.navigate("Dashboard");
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
          <BoldText value="Welcome back." />
          <View className="flex-row mt-2 ">
            <LightText value="Don't have an account?" />
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <LightBlueText styling={"pl-1"} value="Sign Up" />
            </Pressable>
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

          <View className="relative">
            <InputWithLabel
              labelValue="Password"
              placeholder="Enter password..."
            />
            <Text
              onPress={() => navigation.navigate("ResetPassword")}
              style={{ fontFamily: "ManropeRegular" }}
              className="text-[12px] mt-2 self-end mr-5 text-[#6D7589]"
            >
              Forgot password?
            </Text>
          </View>
          <View className="mt-[56px] mb-[27px]">
            <Btn onPressHandler={submitHandler} value="Login" />
          </View>

          {/*---------------------- OR Bar------------------- */}
          <View className="flex-row  mb-4 w-[90%] px-4 mx-auto items-center justify-center space-x-1">
            <View className="h-[1px] w-1/2 bg-[#666666]" />
            <Text style={{ fontFamily: "ManropeBold" }}>OR</Text>
            <View className="h-[1px] w-1/2 bg-[#666666]" />
          </View>
          {/* ----------------------------------------------------- */}
          <View className="">
            <OAuth />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;