import { TextInput, View } from "react-native";
import React, { useState } from "react";
import { Label } from "./Texts";

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
