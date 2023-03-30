import { View, Text, SafeAreaView, Image, Switch } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Backbtn, Header, LightText } from "../../components/seed";
import { COLORS } from "../../components/seed/constants";
const NotificationSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      {/* <StatusBar backgroundColor={COLORS.primaryBlue} barStyle={""} /> */}
      <View className="relative ">
        <Header title="Notification Settings" />
      </View>
      <View className="w-[90%] mx-auto mt-[50px] ">
        <LightText value="You can turn on / off notifications" />
        <View className="mt-[30px]">
          <View className="w-full px-[21px] py-[14px] flex-row justify-between items-center rounded-2xl bg-white">
            <Text
              style={{
                fontFamily: "ManropeRegular",
                color: COLORS.secondaryBlue,
              }}
              className="text-base"
            >
              Push notifications
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#0364FF" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="w-full mt-5 px-[21px] py-[14px] flex-row justify-between items-center rounded-2xl bg-white">
            <Text
              style={{
                fontFamily: "ManropeRegular",
                color: COLORS.secondaryBlue,
              }}
              className="text-base"
            >
              Email notifications
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled2 ? "#0364FF" : "#f4f3f4"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationSettings;
