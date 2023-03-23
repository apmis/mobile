import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import { assets, COLORS } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  InputWithLabelAuth,
  LightBlueText,
  LightText,
  OAuth,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../feathers";
import { createUserSchema } from "../../utils/auth/schemas";
import { Formik } from "formik";
import { InputWithLabelAuthPassword } from "../../components/seed/Inputs";
const SignUp = () => {
  const navigation = useNavigation();
  const ClientServ = client.service("auth-management");
  const baseuRL = "https://healthstack-backend.herokuapp.com";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const submitHandler = async (data) => {
    setLoading(true);
    axios
      .post(`${baseuRL}/users`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(
          `You have successfully created an account ${response.data._id}`
        );
        AsyncStorage.setItem(
          "client_email",
          JSON.stringify(response.data.email)
        );
        navigation.navigate("Dashboard");
      })
      .catch((err) => {
        setError(err);
        console.log(`Sorry, You are unable to create an account ${err}`);
      })
      .finally(() => {
        setLoading(false);
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
          <Formik
            initialValues={initialValues}
            validationSchema={createUserSchema}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <View className="mb-5">
                  <InputWithLabelAuth
                    labelValue="First Name"
                    placeholder="Enter first name..."
                    onBlur={handleBlur("firstname")}
                    changeHandler={handleChange("firstname")}
                    inputValue={values.firstname}
                  />
                  {errors.firstname && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.firstname}
                    </Text>
                  )}
                </View>
                <View className="mb-5">
                  <InputWithLabelAuth
                    labelValue="Last Name"
                    placeholder="Enter lastname..."
                    onBlur={handleBlur("lastname")}
                    changeHandler={handleChange("lastname")}
                    inputValue={values.lastname}
                  />
                  {errors.lastname && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.lastname}
                    </Text>
                  )}
                </View>
                <View className="mb-5">
                  <InputWithLabelAuth
                    labelValue="Email"
                    keyboardType={"email-address"}
                    placeholder="Enter email..."
                    onBlur={handleBlur("email")}
                    changeHandler={handleChange("email")}
                    inputValue={values.email}
                  />
                  {errors.email && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View className="mb-5">
                  <InputWithLabelAuth
                    labelValue="Phone Number"
                    keyboardType={"numeric"}
                    placeholder="Enter phone number..."
                    onBlur={handleBlur("phoneNumber")}
                    changeHandler={handleChange("phoneNumber")}
                    inputValue={values.phoneNumber}
                  />
                  {errors.phoneNumber && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.phoneNumber}
                    </Text>
                  )}
                </View>

                <View className="mb-5">
                  <InputWithLabelAuthPassword
                    labelValue="Password"
                    placeholder="Enter password..."
                    onBlur={handleBlur("password")}
                    changeHandler={handleChange("password")}
                    inputValue={values.password}
                  />
                  {errors.password && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View className="mb-10">
                  <InputWithLabelAuthPassword
                    labelValue="Confirm Password"
                    placeholder="Re-type password..."
                    onBlur={handleBlur("confirmPassword")}
                    changeHandler={handleChange("confirmPassword")}
                    inputValue={values.confirmPassword}
                  />
                  {errors.confirmPassword && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {errors.confirmPassword}
                    </Text>
                  )}
                  {error && (
                    <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                      {`Invalid Credential: ${error.code}`}
                    </Text>
                  )}
                </View>
                <Btn onPressHandler={handleSubmit} value="Sign Up" />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

{
  /* <Formik
initialValues={initialValues}
validationSchema={createUserSchema}
onSubmit={(values) => {
  submitHandler(values);
}}
>
{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
  <View>
    <View className="mb-5">
      <InputWithLabelAuth
        labelValue="Full Name"
        placeholder="Enter full name..."
        onBlur={handleBlur("fullName")}
        changeHandler={handleChange("fullName")}
        inputValue={values.fullName}
      />
    
    </View>
 
  </View>
)}
</Formik> */
}

// {errors.fullName && (
//   <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
//     {errors.fullName}
//   </Text>
// )}
{
  /* <Btn onPressHandler={handleSubmit} value="Sign Up" /> */
}
