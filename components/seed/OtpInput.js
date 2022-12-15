import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
const dummy = ["a", "b", "c", "d", "e", "f"];
const OtpInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  return (
    <View className="flex-row justify-center space-x-2 w-[90%]  mx-auto">
      {dummy.map((d, i) => (
        <View key={`id_${i}`}>
          <TextInput
            keyboardType="number-pad"
            selectionColor={"gray"}
            onFocus={() => setIsFocused(true)}
            onPressIn={() => setSelectedId(`id_${i}`)}
            onBlur={() => setIsFocused(false)}
            maxLength={1}
            style={{ fontFamily: "ManropeMedium" }}
            className={`h-[50px] text-xl text-black  w-[50px] text-center border-[1px] ${
              isFocused & (selectedId == "id_" + i)
                ? "border-[#0364FF]"
                : "border-[#cccccc]"
            }  rounded-[4px]`}
          />
        </View>
      ))}
    </View>
  );
};

export default OtpInput;
