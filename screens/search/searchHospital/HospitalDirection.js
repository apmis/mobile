import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Header, LightBlueText } from "../../../components/seed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input } from "../../../components/seed";
import { assets, COLORS } from "../../../components/seed/constants";

const Card = ({ navigation }) => {
  return (
    <View className="bg-white w-[95%] mx-auto rounded py-4 px-3 flex-row items-center space-x-3">
      <Image
        resizeMode="cover"
        className="w-[36%] h-[114]"
        source={assets.hospital}
      />
      <View className="flex-1">
        <View>
          <Text
            style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
            className="text-base mb-2"
          >
            12hr 20mins (765km)
          </Text>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-xs text-[#6E6D6D]"
          >
            Fastest route, despite the usual traffic
          </Text>
        </View>
        <View className="flex-row space-x-2 mt-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("HospitalAppointment")}
            className="bg-[#E5EFFB] justify-center flex-1 flex-row items-center space-x-1 rounded py-2 px-2"
          >
            <LightBlueText value="Start" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HospitalDirection = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white pb-12">
        <Header title="Direction" />
        {/* FLOW */}
        <View className="flex-row mt-[8%] mx-auto w-[90%] items-center space-x-3">
          {/* GREEN */}
          <View className="space-y-3 items-center">
            <View className="bg-[#CFFDCE] w-5 h-5 flex justify-center items-center rounded-full">
              <View className="bg-[#0ED00A] h-3 w-3 rounded-full" />
            </View>
            {/* DOTTED TREE */}
            <View className="space-y-[2px]">
              <View className=" bg-[#6F6F6F] rounded-full h-[2] w-[2]" />
              <View className=" bg-[#6F6F6F] rounded-full h-[2] w-[2]" />
              <View className=" bg-[#6F6F6F] rounded-full h-[2] w-[2]" />
              <View className=" bg-[#6F6F6F] rounded-full h-[2] w-[2]" />
              <View className=" bg-[#6F6F6F] rounded-full h-[2] w-[2]" />
            </View>
            {/* LOCATION */}
            <View>
              <Ionicons size={20} name="location-outline" color="#0ED00A" />
            </View>
          </View>
          {/* RIGHT */}
          <View className="flex-1">
            <Input placeholder="your location" />
            <View className="mt-2">
              <Input placeholder="third mainland bridge" />
            </View>
          </View>
        </View>
      </View>
      <View className=" w-full absolute  bottom-0 ">
        <Card navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HospitalDirection;
