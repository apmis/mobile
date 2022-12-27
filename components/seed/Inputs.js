import { TextInput, View } from "react-native";
import React, { useState } from "react";
import { Label } from "./Texts";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Input = ({ value, changeHandler, placeholder, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={{ fontFamily: "ManropeRegular" }}
      className={`w-[90%] bg-transparent ${
        isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
      } text-[#6D7589] text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      keyboardType={keyboardType}
      onChangeText={changeHandler}
      value={value}
    />
  );
};

export const ChatInput = () => {
  return (
    <View className="bg-white flex-row justify-between items-center px-5 py-[18] rounded-2xl flex-1 ">
      <TextInput
        className="w-[90%]"
        style={{ fontFamily: "ManropeRegular" }}
        placeholder="Message here"
      />
      <TouchableOpacity className="h-full z-10">
        <FontAwesome size={21} name="microphone" />
      </TouchableOpacity>
    </View>
  );
};

export const InputWithLabel = ({
  inputValue,
  labelValue,
  changeHandler,
  placeholder = "Enter placeholder",
  keyboardType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="w-[90%] mx-auto">
      <Label value={labelValue} />
      <TextInput
        style={{ fontFamily: "ManropeRegular" }}
        className={`w-full bg-transparent ${
          isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
        } text-[#6D7589] text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
        onChangeText={changeHandler}
        value={inputValue}
      />
    </View>
  );
};
