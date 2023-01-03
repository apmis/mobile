import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Btn, Header, LabelSmall } from "../../../components/seed";
import { COLORS } from "../../../components/seed/constants";

const AmbulanceForm = ({ route, navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMale, setIsMale] = useState(null);
  const [isOxygenRequired, setIsOxygenRequired] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const {
    data: { name },
  } = route.params;

  return (
    <SafeAreaView className="flex-1">
      <Header title={name} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-[10%] w-[90%] mx-auto "
      >
        {/* -------------SEX----------- */}
        <View className="">
          <Text style={{ fontFamily: "ManropeRegular" }} className="mb-3">
            The patient is...
          </Text>
          <View className="flex-row items-center space-x-[14px]">
            <TouchableOpacity
              onPress={() => setIsMale(true)}
              className={`w-[22%] h-[48] flex justify-center ${
                isMale ? "bg-[#0364FF]" : "border-[1px]"
              } items-center  border-[#D2D2D2] rounded`}
            >
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: !isMale ? COLORS.secondaryBlue : "white",
                }}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsMale(false)}
              className={`w-[22%] h-[48] flex justify-center ${
                !isMale && isMale != null ? "bg-[#0364FF]" : "border-[1px]"
              } items-center  border-[#D2D2D2] rounded`}
            >
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color:
                    isMale || isMale == null ? COLORS.secondaryBlue : "white",
                }}
              >
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* -------------GENDER----------- */}
        <View className="mt-6">
          <Text style={{ fontFamily: "ManropeRegular" }} className="mb-3">
            Gender is...
          </Text>
          <View className="flex-row items-center  space-x-3">
            {["Toddler", "Child", "Teen", "Adult"].map((text, i) => (
              <TouchableOpacity
                key={i.toString()}
                onPress={() => setSelectedGender(i.toString())}
                className={`w-[22%] h-[48] flex justify-center ${
                  selectedGender === i.toString()
                    ? "bg-[#0364FF]"
                    : "border-[1px]"
                } items-center  border-[#D2D2D2] rounded`}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color:
                      selectedGender === i.toString()
                        ? "white"
                        : COLORS.secondaryBlue,
                  }}
                >
                  {text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* -------------OXYGEN----------- */}
          <View className="mt-6">
            <Text style={{ fontFamily: "ManropeRegular" }} className="mb-3">
              Need Oxygen?
            </Text>
            <View className="flex-row items-center space-x-[14px]">
              <TouchableOpacity
                onPress={() => setIsOxygenRequired(true)}
                className={`w-[22%] h-[48] flex justify-center ${
                  isOxygenRequired ? "bg-[#0364FF]" : "border-[1px]"
                } items-center  border-[#D2D2D2] rounded`}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color: !isOxygenRequired ? COLORS.secondaryBlue : "white",
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsOxygenRequired(false)}
                className={`w-[22%] h-[48] flex justify-center ${
                  !isOxygenRequired && isOxygenRequired != null
                    ? "bg-[#0364FF]"
                    : "border-[1px]"
                } items-center  border-[#D2D2D2] rounded`}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color:
                      isOxygenRequired || isOxygenRequired === null
                        ? COLORS.secondaryBlue
                        : "white",
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* DESCRIPTION */}
          <View className="mt-6">
            <View className="mb-1">
              <LabelSmall value="Any information you would like us to know?" />
            </View>
            <TextInput
              style={{ fontFamily: "ManropeRegular", textAlignVertical: "top" }}
              className={`w-full bg-transparent h-[140px] ${
                isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
              } text-[#6D7589] text-sm px-6 py-4 mx-auto  rounded-md border-[1px]`}
              placeholder="Please type your message here..."
              multiline={true}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              //   keyboardType={keyboardType}
              //   onChangeText={changeHandler}
              //   value={value}
            />
            {/* CONCLUSION */}
            <View className="mt-6">
              {/* DISTANCE */}
              <View>
                <Text className="mb-2" style={{ fontFamily: "ManropeRegular" }}>
                  Distance to be covered
                </Text>
                <View className="w-full border-[1px] border-[#D2D2D2] rounded px-6 py-3 ">
                  <Text
                    style={{ fontFamily: "ManropeRegular" }}
                    className="text-[#6D7589] text-sm"
                  >
                    8km
                  </Text>
                </View>
              </View>
              {/* RATE */}

              <View className="mb-10 mt-2">
                <Text className="mb-2" style={{ fontFamily: "ManropeRegular" }}>
                  Ambulance Rate
                </Text>
                <View className="w-full border-[1px] border-[#D2D2D2] rounded px-6 py-3 ">
                  <Text
                    style={{ fontFamily: "ManropeRegular" }}
                    className="text-[#6D7589] text-sm"
                  >
                    <Text style={{ fontFamily: "ManropeSemibold" }}>
                      N1,000
                    </Text>{" "}
                    {"  "}per km
                  </Text>
                </View>
              </View>
              {/* CONTINUE BTN */}
              <View className="mb-6">
                <Btn
                  btnWidth="100%"
                  value="Continue"
                  onPressHandler={() => navigation.navigate("AmbulanceTime")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AmbulanceForm;
