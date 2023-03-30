import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { Btn, Header, InputWithLabel, Label } from "../../../components/seed";

const Forums = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SafeAreaView>
      <Header title="Forums" />
      <View className="mt-8">
        <InputWithLabel labelValue="Choose Forum" placeholder="select" />
        <View className="mt-4 mb-5">
          <InputWithLabel labelValue="Topic" placeholder="Enter topic..." />
        </View>
        <View className="ml-5">
          <Label value="Description" />
        </View>
        <TextInput
          style={{ fontFamily: "ManropeRegular", textAlignVertical: "top" }}
          className={`w-[90%] mb-10 bg-transparent h-[140px] ${
            isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
          } text-[#6D7589] text-sm px-6 py-4 mx-auto  rounded-md border-[1px]`}
          placeholder="Type here..."
          multiline={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          //   keyboardType={keyboardType}
          //   onChangeText={changeHandler}
          //   value={value}
        />
        <Btn value="Send" />
      </View>
    </SafeAreaView>
  );
};

export default Forums;
