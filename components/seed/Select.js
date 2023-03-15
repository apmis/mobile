import { View, Text } from "react-native";
import React from "react";
import { Label } from "./Texts";
import { Picker } from "@react-native-picker/picker";
import { lgaList } from "../../utils/lga";
import { useState } from "react";

export const StateSelect = ({ selectedValue, setSelectedValue }) => {
  const [isfocused, setIsFocused] = useState(false);
  return (
    <View>
      <View className="ml-[5%]">
        <Label value="State" />
      </View>
      <View
        className="w-[90%] mx-auto  text-[#6D7589]"
        style={{
          height: 45,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "white",
          borderColor: isfocused ? "#0364FF" : "#D2D2D2",
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {Object.keys(lgaList).map((state, i) => (
            <Picker.Item key={i} label={state} value={state} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export const LgaSelect = ({
  selectedValue,
  setSelectedValue,
  selectedState,
}) => {
  const [isfocused, setIsFocused] = useState(false);

  //   if (!lgaList.hasOwnProperty(selectedState)) {
  //     console.log(`Key "${selectedState}" does not exist in the array.`);
  //     return;
  //   }
  return (
    <View>
      <View className="ml-[5%]">
        <Label value="Local Government" />
      </View>
      <View
        className="w-[90%] mx-auto  text-[#6D7589]"
        style={{
          height: 45,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "white",
          borderColor: isfocused ? "#0364FF" : "#D2D2D2",
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {(lgaList.hasOwnProperty(selectedState)
            ? lgaList[selectedState]
            : []
          ).map((lga, i) => (
            <Picker.Item key={i} label={lga} value={lga} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export const Select = ({
  labelValue,
  selectedValue,
  setSelectedValue,
  list,
}) => {
  const [isfocused, setIsFocused] = useState(false);
  return (
    <View>
      <View className="ml-[5%]">
        <Label value={labelValue} />
      </View>
      <View
        className="w-[90%] mx-auto  text-[#6D7589]"
        style={{
          height: 45,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "white",
          borderColor: isfocused ? "#0364FF" : "#D2D2D2",
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {list.map((value, i) => (
            <Picker.Item key={i} label={value} value={value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
