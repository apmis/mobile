import { View, Text, SafeAreaView, Image, Switch } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  Backbtn,
  Btn,
  InputWithLabel,
  TabGeneral,
} from "../../components/seed";
import { COLORS } from "../../components/seed/constants";
const FundWallet = ({ navigation }) => {
  const [isFundSelfSelected, setIsFundSelfSelected] = useState("true");
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      <View className="relative ">
        <Backbtn />
        <Text
          style={{ fontFamily: "ManropeSemibold" }}
          className="text-base text-center text-[#070C18]"
        >
          Fund Wallet
        </Text>
      </View>
      <View className="w-[90%] mx-auto mt-[50px] ">
        <TabGeneral
          firstValue="For Self"
          secondValue="For Others"
          isFirstSelected={isFundSelfSelected}
          setIsFirstSelected={setIsFundSelfSelected}
        />
        <View className="mt-[35] mb-10">
          {!isFundSelfSelected && (
            <View className="mb-5">
              <InputWithLabel
                labelValue={"Username"}
                placeholder="Enter username..."
              />
            </View>
          )}
          <InputWithLabel labelValue={"Amount"} placeholder="Enter amount..." />
        </View>
      </View>
      <Btn
        value="Fund Wallet"
        onPressHandler={() =>
          navigation.navigate("SuccessWithThanks", {
            screen: "FundWallet",
            successMessage: "Transaction Successful",
            btnText: "Back to Home",
          })
        }
      />
    </SafeAreaView>
  );
};

export default FundWallet;
