import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { assets } from "./constants";
import { useNavigation } from "@react-navigation/native";

const Backbtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="absolute z-10 left-5 top-[6px]"
    >
      <Image source={assets.backArrow} />
    </TouchableOpacity>
  );
};

export default Backbtn;
