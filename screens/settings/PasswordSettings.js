import { View, Text, SafeAreaView, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Modal from "react-native-modal";
import {
  Backbtn,
  Btn,
  Header,
  InputWithLabel,
  LightText,
} from "../../components/seed";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../../components/seed/constants";
const PasswordSettings = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { deviceWidth, deviceHeight } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      {/* <StatusBar hidden={isModalVisible} /> */}
      <View className="relative ">
        <Header title="Password Settings" />
      </View>

      <View className="w-[90%] mx-auto mt-[50px] ">
        <LightText value="Please fill the form to change your password" />
        <View className="mb-5 mt-[30px]">
          <InputWithLabel
            labelValue="Old Password"
            placeholder="Enter old password..."
          />
        </View>
        <View className="mb-5">
          <InputWithLabel
            labelValue="New Password"
            placeholder="Enter new password..."
          />
        </View>
        <View className="mb-10">
          <InputWithLabel
            labelValue="Confirm New Password"
            placeholder="Re-type password..."
          />
        </View>
        {/* onPressHandler={submitHandler} */}
        <Btn onPressHandler={() => setIsModalVisible(true)} value="Save" />
      </View>
      <Modal
        animationOut="zoomOut"
        coverScreen={false}
        animationInTiming={400}
        animationOutTiming={400}
        deviceHeight={deviceHeight + StatusBar.currentHeight}
        deviceWidth={deviceWidth}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
      >
        <View className="h-[100%] mt-[80%] bg-white">
          <View className="flex items-center space-y-4 mb-[60%] mt-[20%]">
            <Image source={assets.checkmark} />
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-base text-center text-[#070C18]"
            >
              Password changed successfully
            </Text>
          </View>
          <Btn
            onPressHandler={() => setIsModalVisible(false)}
            value="Go Back"
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PasswordSettings;
