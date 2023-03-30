import { TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Label } from "./Texts";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { assets } from "./constants";

export const Input = ({ value, changeHandler, placeholder, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={{ fontFamily: "ManropeRegular" }}
      className={`w-[90%] bg-transparent ${
        isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
      } text-black text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
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
  width = "90%",
  inputValue,
  labelValue,
  changeHandler,
  placeholder = "Enter placeholder",
  keyboardType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ width: width }} className="mx-auto">
      <Label value={labelValue} />
      <TextInput
        style={{ fontFamily: "ManropeRegular" }}
        className={`w-full bg-transparent ${
          isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
        } text-black text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
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
export const InputWithLabelPassword = ({
  width = "90%",
  inputValue,
  labelValue,
  changeHandler,
  placeholder = "Enter placeholder",
  keyboardType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <View style={{ width: width }} className="mx-auto">
      <Label value={labelValue} />
      <View className="relative">
        <TextInput
          style={{ fontFamily: "ManropeRegular" }}
          className={`w-full bg-transparent ${
            isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
          } text-black text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
          placeholder={placeholder}
          secureTextEntry={isPasswordHidden}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType={keyboardType}
          onChangeText={changeHandler}
          value={inputValue}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordHidden((prev) => !prev)}
          className="absolute p-1 top-0 right-0 h-full  w-14 flex justify-center items-center"
        >
          {isPasswordHidden ? (
            <Image source={assets.closedEye} />
          ) : (
            <Image source={assets.visibleEye} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const InputWithLabelAuth = ({
  width = "90%",
  inputValue,
  onBlur,
  labelValue,
  changeHandler,
  refValue,
  isEditable = true,
  placeholder = "Enter placeholder",
  keyboardType,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ width: width }} className="mx-auto">
      <Label value={labelValue} />
      <TextInput
        ref={refValue}
        editable={isEditable}
        style={{ fontFamily: "ManropeRegular" }}
        className={`w-full bg-transparent ${
          isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
        } text-black text-sm px-4 mx-auto py-2 rounded-md border-[1px]`}
        placeholder={placeholder}
        {...restProps}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          onBlur;
          setIsFocused(false);
        }}
        keyboardType={keyboardType}
        onChangeText={changeHandler}
        value={inputValue}
      />
    </View>
  );
};

export const InputWithLabelAuthPassword = ({
  width = "90%",
  inputValue,
  onBlur,
  labelValue,
  changeHandler,
  placeholder = "Enter placeholder",
  keyboardType,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <View style={{ width: width }} className="mx-auto">
      <Label value={labelValue} />
      <View className="relative">
        <TextInput
          style={{ fontFamily: "ManropeRegular" }}
          className={`w-full bg-transparent ${
            isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
          } text-black text-sm px-4 mx-auto py-2 rounded-md border-[1px] pr-14`}
          placeholder={placeholder}
          {...restProps}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            onBlur;
            setIsFocused(false);
          }}
          keyboardType={keyboardType}
          secureTextEntry={isPasswordHidden}
          onChangeText={changeHandler}
          value={inputValue}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordHidden((prev) => !prev)}
          className="absolute p-1 top-0 right-0 h-full  w-14 flex justify-center items-center"
        >
          {isPasswordHidden ? (
            <Image source={assets.closedEye} />
          ) : (
            <Image source={assets.visibleEye} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
