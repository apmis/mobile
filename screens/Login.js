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
import { useEffect } from "react";
import client from "../feathers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputWithLabelPassword } from "../components/seed/Inputs";

const Login = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const ProductServ = client.service("products");
  const ClientServ = client.service("appointments");
  const BandServ = client.service("bands");
  // navigation.navigate("Dashboard");

  const submitHandler = async () => {
    try {
      setLoading(true);
      console.log("clicked", email, password);
      // console.log(client.hooks());
      const res = await client.authenticate({
        strategy: "local",
        email,
        password,
      });

      console.log(res);
      console.log("You successfully logged in");
      AsyncStorage.setItem("client_email", JSON.stringify(res.user.email));
      navigation.navigate("Dashboard");
    } catch (err) {
      setLoading(false);
      setError(`${err.toString()}`);
      // console.log(`Error logging in User, probable network issues  ${err}`);
    }
  };

  return (
    <SafeAreaView className="bg-[#f3f3f3] ">
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
              <InputWithLabel
                inputValue={email}
                keyboardType={"email-address"}
                changeHandler={(text) => setEmail(text)}
                labelValue="Email"
                placeholder="Enter email..."
              />
            </View>
          ) : (
            <View className="mb-5">
              <InputWithLabel
                keyboardType={"numeric"}
                labelValue="Phone Number"
                placeholder="Enter phone number..."
              />
            </View>
          )}

          <View className="relative">
            <InputWithLabelPassword
              inputValue={password}
              changeHandler={(text) => setPassword(text)}
              labelValue="Password"
              placeholder="Enter password..."
            />
            {error && (
              <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                {error}
              </Text>
            )}
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
