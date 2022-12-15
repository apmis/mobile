import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Backbtn, LightText } from "../../components/seed";
import { assets, COLORS } from "../../components/seed/constants";
import { useGlobalize } from "react-native-globalize";
import Arrow from "react-native-vector-icons/AntDesign";
import Eye from "react-native-vector-icons/Octicons";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Drugs Treatment",
    transactionType: "outgoing",
    status: "Pending",
    time: "2:45pm",
    price: "50000",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    title: "You funded your wallet",
    transactionType: "incoming",
    status: "Successful",
    time: "2:45pm",
    price: "50000",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    title: "You paid for drugs",
    transactionType: "outgoing",
    status: "Successful",
    time: "2:45pm",
    price: "50000",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    title: "You funded your wallet",
    transactionType: "incoming",
    status: "Successful",
    time: "2:45pm",
    price: "50000",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
    title: "You funded your wallet",
    transactionType: "incoming",
    status: "Successful",
    time: "2:45pm",
    price: "50000",
  },
];
// ================ TRANSACTION COMPONENT =====================
const Transaction = ({ formatCurrency, data }) => {
  const { title, price, status, time, transactionType } = data;
  return (
    <View className="pt-2 pb-4  px-4 ">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
          <View
            className={`rounded-full p-1  ${
              transactionType === "incoming" && status === "Successful"
                ? "-rotate-[160deg] bg-[#cdf8d6]  "
                : transactionType === "outgoing" && status === "Successful"
                ? "bg-[#f6b4bb] rotate-[24deg] "
                : "bg-[#f5e3be] "
            }`}
          >
            <Arrow
              name="arrowup"
              color={
                transactionType === "incoming"
                  ? "#4AD768"
                  : transactionType === "outgoing" && status === "Pending"
                  ? "#FCB222"
                  : "#ED0423"
              }
              size={30}
            />
          </View>
          <View>
            <Text style={{ fontFamily: "ManropeRegular" }}>{title}</Text>
          </View>
        </View>
        <Text style={{ fontFamily: "ManropeExtrBold" }} className="text-[14px]">
          {formatCurrency(Number(price), "NGN", {
            // maximumFractionDigits: 0,
            useGrouping: true,
          })}
        </Text>
      </View>
      <Text
        className="text-[#6D7589] ml-[54px]"
        style={{ fontFamily: "ManropeLight", fontSize: 12 }}
      >
        {status}
        {", "}
        <Text>{time}</Text>
      </Text>
    </View>
  );
};

// ================ BOARD COMPONENT ============================
const Board = ({ formatCurrency, navigation }) => {
  return (
    <>
      <View
        style={{ backgroundColor: COLORS.secondaryBlue }}
        className="rounded-2xl relative w-[95%] mx-auto py-8 "
      >
        <View className="absolute right-4 top-1 ">
          <Image source={assets.walletPattern} />
          <TouchableOpacity className="right-[16] top-[30] z-20  absolute">
            <Eye color="white" size={16} name="eye-closed" />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-[#ffffff] pl-[24px]"
          >
            Wallet
          </Text>
          <Text
            style={{ fontFamily: "ManropeExtrBold" }}
            className="text-[28px] mt-4 text-white pl-[24px]"
          >
            {formatCurrency(50000, "NGN", {
              // maximumFractionDigits: 0,
              useGrouping: true,
            })}
          </Text>
          <View className="w-[95%] h-[1px] ml-[18px] mt-[29px] mb-[21px] bg-[#cccccc]" />
          <View className="flex-row space-x-4 mx-auto ">
            <TouchableOpacity
              onPress={() => navigation.navigate("FundWallet")}
              className="py-3 px-8 rounded bg-white"
            >
              <Text
                style={{ fontFamily: "ManropeSemibold" }}
                className="text-base text-center text-[#070C18]"
              >
                Fund Wallet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FundWallet")}
              className="py-3 px-8 rounded bg-white"
            >
              <Text
                style={{ fontFamily: "ManropeSemibold" }}
                className="text-base text-center text-[#070C18]"
              >
                View Bills
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{ fontFamily: "ManropeBold" }}
        className="text-lg ml-6 mt-[25px] mb-4"
      >
        Transaction History{" "}
      </Text>
    </>
  );
};
// ================ WALLET MAIN ===============================

const Wallet = ({ navigation }) => {
  const { formatCurrency } = useGlobalize();

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      {/* <StatusBar backgroundColor={COLORS.primaryBlue} barStyle={""} /> */}
      <View className="relative ">
        <Backbtn />
        <Text
          style={{ fontFamily: "ManropeSemibold" }}
          className="text-base text-center text-[#070C18]"
        >
          Wallet
        </Text>
      </View>
      <View className="w-[96%] mx-auto mt-[24px]  ">
        <FlatList
          keyExtractor={(d) => d.id}
          data={DATA}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 60,
          }}
          ItemSeparatorComponent={
            <View className="h-[1px] w-[90%] mx-auto my-1 bg-[#D2D2D2]" />
          }
          renderItem={({ item }) => (
            <Transaction formatCurrency={formatCurrency} data={item} />
          )}
          ListHeaderComponent={
            <Board navigation={navigation} formatCurrency={formatCurrency} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
