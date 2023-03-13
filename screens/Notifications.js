import {
  View,
  Text,
  SafeAreaView,
  Image,
  Switch,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Header } from "../components/seed";
import client from "../feathers";
import { useState, useEffect } from "react";

const DATA = [
  { id: "131", message: "Wallet has been funded with 5,000" },
  { id: "132", message: "Appointment with Dr. Makinde has been booked" },
  { id: "133", message: "Appointment with Dr. Makinde has been booked" },
  { id: "134", message: "Read our latests blog posts today" },
];

const Row = ({ data: { description } }) => {
  //   const { width } = Dimensions.get("window");

  return (
    <View className="flex-row items-center w-[95%] mx-auto  space-x-4">
      <View className="w-[30] h-[30] bg-[#EBEFF8] rounded-full  items-center justify-center">
        <View className="bg-[#0E214D] w-[14] h-[14] rounded-full" />
      </View>
      <Text className="w-[90%]">{description}</Text>
    </View>
  );
};

const Notifications = ({ navigation }) => {
  const notifications = client.service("notification");
  const [data, setData] = useState([{ description: "" }]);

  const fetch = async () => {
    try {
      const notificationsRes = await notifications.find({
        query: {
          dest_userId: ["602178f86875b80015e4c5de"],
          // $limit: 4,
          // description: { $ne: "" },

          $sort: {
            createdAt: -1,
          },
          $select: ["description"],
        },
      });

      // console.log(authRes.data[0]);
      console.log(notificationsRes.data);
      setData(notificationsRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="">
      <Header title="Notifications" />
      <View className="w-[95%] mx-auto mt-[50px] ">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Row data={item} />}
          ItemSeparatorComponent={
            <View className="w-[90%] h-[1px] my-4 mx-auto bg-[#D2D2D2]" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
