import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";
import { assets, COLORS } from "../../components/seed/constants";
import {
  BoldText,
  Btn,
  InputWithLabel,
  InputWithLabelAuth,
  LightText,
  Tab,
} from "../../components/seed";
import { Formik } from "formik";

import { useNavigation } from "@react-navigation/native";
import client from "../../feathers";
import { forgotPasswordSchema } from "../../utils/auth/schemas";
import axios from "axios";

const ResetPassword = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ClientServ = client.service("auth-management");
  const baseuRL = "https://healthstack-backend.herokuapp.com";

  const submitHandler = (data) => {
    console.log(data.email);
    setLoading(true);

    let body = {
      action: "sendResetPwd",
      value: {
        email: data.email,
      },
    };

    axios
      .post(`${baseuRL}/authManagement`, body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(`An email has been sent to you for your password reset`);
        navigation.navigate("ResetPasswordScreen2");
      })
      .catch((err) => {
        setError(err.code);
        console.log(`Sorry, You are unable to reset your account ${err}`);
      });

    setLoading(false);
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

        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <View className="pb-10">
                {isEmailSelected ? (
                  <View className="mb-5">
                    {/* <InputWithLabel
                      labelValue="Email"
                      placeholder="Enter email..."
                    /> */}
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
                ) : (
                  <View className="mb-5">
                    <InputWithLabel
                      keyboardType={"numeric"}
                      labelValue="Phone Number"
                      placeholder="Enter phone number..."
                    />
                  </View>
                )}
                {error && (
                  <Text className="text-red-500 text-[11px] ml-[6%] -mt-4">
                    {error}
                  </Text>
                )}
                <View className="mt-[56px] mb-[27px]">
                  <Btn onPressHandler={handleSubmit} value="Continue" />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
