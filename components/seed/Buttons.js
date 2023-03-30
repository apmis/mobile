import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "./constants";

export const Btn = ({ value = "Button", onPressHandler, btnWidth = "90%" }) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{ backgroundColor: COLORS.primaryBlue, width: btnWidth }}
      className={`py-2 rounded-[4px] mx-auto flex-row justify-center items-center`}
    >
      <Text
        style={{ fontFamily: "ManropeBold" }}
        className="text-base text-white"
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

// =============================================================================

export const Tab = ({ isEmailSelected, setIsEmailSelected }) => {
  return (
    <View
      className={`p-[5px] mx-auto rounded-[4px] flex-row justify-between items-center space-x-6 w-[90%] bg-white `}
    >
      <TouchableOpacity
        onPress={() => setIsEmailSelected(true)}
        className={`w-[45%] py-2 ${
          isEmailSelected && "bg-[#DAE1F3]"
        }  rounded-[4px]`}
      >
        <Text
          style={{
            color: isEmailSelected ? COLORS.activeTabText : COLORS.lightText,
            fontFamily: isEmailSelected ? "ManropeMedium" : "ManropeLight",
          }}
          className="text-center"
        >
          Email
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsEmailSelected(false)}
        className={`w-[45%] py-2  rounded-[4px] ${
          !isEmailSelected && "bg-[#DAE1F3]"
        }`}
      >
        <Text
          style={{
            color: !isEmailSelected ? COLORS.activeTabText : COLORS.lightText,
            fontFamily: !isEmailSelected ? "ManropeMedium" : "ManropeLight",
          }}
          className="text-center"
        >
          Phone Number
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const TabGeneral = ({
  isFirstSelected,
  setIsFirstSelected,
  firstValue = "firstValue",
  secondValue = "secondValue",
}) => {
  return (
    <View
      className={`p-[5px] mx-auto rounded-[4px] flex-row justify-between items-center space-x-6 w-[90%] bg-white `}
    >
      <TouchableOpacity
        onPress={() => setIsFirstSelected(true)}
        className={`w-[45%] py-2 ${
          isFirstSelected && "bg-[#DAE1F3]"
        }  rounded-[4px]`}
      >
        <Text
          style={{
            color: isFirstSelected ? COLORS.activeTabText : COLORS.lightText,
            fontFamily: isFirstSelected ? "ManropeMedium" : "ManropeLight",
          }}
          className="text-center"
        >
          {firstValue}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsFirstSelected(false)}
        className={`w-[45%] py-2  rounded-[4px] ${
          !isFirstSelected && "bg-[#DAE1F3]"
        }`}
      >
        <Text
          style={{
            color: !isFirstSelected ? COLORS.activeTabText : COLORS.lightText,
            fontFamily: !isFirstSelected ? "ManropeMedium" : "ManropeLight",
          }}
          className="text-center"
        >
          {secondValue}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
