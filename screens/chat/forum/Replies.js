import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Header, LightTextBase } from "../../../components/seed";
import Octicons from "react-native-vector-icons/Octicons";
import { assets } from "../../../components/seed/constants";

const replies = [
  {
    id: "1",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
  {
    id: "2",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
  {
    id: "3",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
  {
    id: "4",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
  {
    id: "5",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
  {
    id: "6",
    img: assets.profile4,
    name: "Christian Peters",
    time: "1hr ago",
    desc: "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal.",
    numOfReplies: 20,
  },
];

const Reply = ({
  navigation,
  item: { img, name, time, desc, numOfReplies },
}) => {
  return (
    <View className="py-3 px-4 ">
      <View className="flex-row space-x-3  items-center">
        <Image resizeMode="contain" className="w-[30] h-[30]" source={img} />
        <View className="space-y-1">
          <Text style={{ fontFamily: "ManropeBold" }} className="">
            {name}
          </Text>
          <Text
            style={{ fontFamily: "ManropeLight" }}
            className="text-[10px] text-[#B3B3B3]"
          >
            {time}
          </Text>
        </View>
      </View>
      <View className="my-4">
        <LightTextBase value={desc} />
      </View>
    </View>
  );
};

const Replies = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header title={"Replies (54)"} />
      <View className="h-full pb-16  mt-7 w-[90%] mx-auto">
        <FlatList
          className="flex-1 bg-white rounded"
          data={replies}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={
            <View className="h-[1px] bg-[#666666] w-[95%] mx-auto mt-1 mb-2" />
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Reply item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Replies;
