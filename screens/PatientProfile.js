import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Accordion } from "react-native-animated-accordion";
import { StatusBar } from "react-native";
import { assets } from "../components/seed/constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Btn, Header, InputWithLabel } from "../components/seed";
const PatientProfile = ({ navigation }) => {
  // const { deviceWidth, deviceHeight } = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={{}} className="">
      <View className="relative pb-2 ">
        <Header title="My Profile" />
      </View>
      {/* ----------------------IMAGE SELECTION MODAL------------------- */}
      {isModalVisible && (
        <>
          <Pressable
            onPress={() => setIsModalVisible(false)}
            className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-[#000000]/50"
          />
          <View className="absolute top-0 bottom-0 left-0 right-0">
            <View className="h-[20%]  w-[90%] mx-auto z-30 top-[25%] py-10 pl-[30px]  rounded-[10px] bg-white">
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text
                  style={{ fontFamily: "ManropeSemibold" }}
                  className="text-base align-middle text-[#475464]"
                >
                  Upload From Gallery
                </Text>
              </TouchableOpacity>
              <View className="my-4 w-[90%] opacity-20 h-[1px] bg-[#475464]" />
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text
                  style={{ fontFamily: "ManropeSemibold" }}
                  className="text-base text-[#475464]"
                >
                  Take Live Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="w-[100%] mt-[25%] h-[170px] mb-[34px] bg-[#E4F3FE] flex-row space-x-2">
          <View className="mx-auto relative -top-14">
            <View className="relative">
              <Image source={assets.profilePic} className="rounded-2xl" />
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Image
                  source={assets.changeProfileImage}
                  className="-right-2 absolute -bottom-2"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-base text-center mt-5 text-[#070C18]"
            >
              Christian Peters
            </Text>
          </View>
        </View>
        <View>
          <View className="mb-5">
            <InputWithLabel labelValue="First Name" placeholder="Christian" />
          </View>
          <View className="mb-5">
            <InputWithLabel labelValue="Last Name" placeholder="Peters" />
          </View>
          <View className="mb-5">
            <InputWithLabel labelValue="Middle Name" placeholder="Chigozie" />
          </View>
        </View>
        {/* ------------------ BIO-DATA ACCORDION ----------------------- */}
        <View>
          <Accordion
            parentContainerStyles={{
              marginHorizontal: "5%",
              marginVertical: "5%",
            }}
            headerText="BIO DATA"
            headerTextStyles={{
              fontFamily: "ManropeExtrBold",
              paddingLeft: 18,
              fontSize: 18,
            }}
          >
            <View style={{ padding: 10 }}>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Email"
                  placeholder="auraqule@gmail.com"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Phone Number 1"
                  placeholder="07066389644"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Phone Number 2"
                  placeholder="08066389644"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="Gender" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Date of Birth"
                  placeholder="dd/mm/yyy"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="Religion" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="Profession" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Marital Status"
                  placeholder="select"
                />
              </View>
            </View>
          </Accordion>
        </View>

        {/* ------------------------- ADDRESS ACCORDION ---------------------------------- */}
        <View className="mb-12">
          <Accordion
            parentContainerStyles={{
              marginHorizontal: "5%",
            }}
            headerText="ADDRESS"
            headerTextStyles={{
              fontFamily: "ManropeExtrBold",
              paddingLeft: 18,
              fontSize: 18,
            }}
          >
            <View style={{ padding: 10 }}>
              <View className="mb-5">
                <InputWithLabel labelValue="Country" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Residential address"
                  placeholder="enter address"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="State" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Local Government"
                  placeholder="select"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="Town" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel labelValue="City" placeholder="select" />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Neighourhood"
                  placeholder="enter address"
                />
              </View>
              <View className="mb-5">
                <InputWithLabel
                  labelValue="Street address"
                  placeholder="enter address"
                />
              </View>
              <View className="mt-4 px-3 mb-[72px]">
                <BouncyCheckbox
                  size={25}
                  fillColor="#0364FF"
                  unfillColor="#FFFFFF"
                  text="I give the doctor consent to see my Health Profile during my appointment and/ or treatment."
                  iconStyle={{ borderColor: "#0364FF" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{
                    fontFamily: "ManropeRegular",
                    fontSize: 14,
                    textDecorationLine: "none",
                  }}
                />
              </View>
              <View className="pb-[49px]">
                <Btn
                  onPressHandler={() => console.log("clicked")}
                  value="Save Changes"
                />
              </View>
            </View>
          </Accordion>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientProfile;
