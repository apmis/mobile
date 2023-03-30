import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { assets, COLORS } from "../../../components/seed/constants";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LightTextBase } from "../../../components/seed";
import { useNavigation } from "@react-navigation/native";
import CommentModal from "./CommentModal";

export const trendingPost = [
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
];

export const Post = ({
  navigation,
  setIsCommentModalOpen,
  item: { img, name, time, desc, numOfReplies },
}) => {
  return (
    <View className="bg-white py-3 px-4 mb-2 rounded">
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
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.navigate("Replies")}>
          <Octicons size={16} name="comment" color="#979DAC" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Replies")}>
          <Text className="ml-2 text-[#6D7589]">{`${numOfReplies} replies`}</Text>
        </TouchableOpacity>
        <View className="h-3 ml-3 mr-2 w-[1px] bg-black" />
        <TouchableOpacity
          onPress={() => setIsCommentModalOpen((prev) => !prev)}
        >
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ForumRow = ({ bgColor = "#C9DEFF", navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ForumDetails")}
      className="py-5 px-5 flex rounded flex-row justify-between items-center"
      style={{ backgroundColor: bgColor }}
    >
      <Text
        style={{ fontFamily: "ManropeMedium", color: COLORS.secondaryBlue }}
        className="text-sm"
      >
        Healthcare in Nigeria
      </Text>
      <View className="flex-row items-center">
        <Text style={{ fontFamily: "ManropeRegular" }} className="text-xs mr-1">
          300+
        </Text>
        <ImageStack />
        <MaterialIcons size={24} name="keyboard-arrow-right" color="#979DAC" />
      </View>
    </TouchableOpacity>
  );
};

const ImageStack = () => {
  return (
    <View className="flex-row items-center">
      <Image
        resizeMode="contain"
        className=" w-[31] h-[31] "
        source={assets.profile3}
      />
      <Image
        resizeMode="contain"
        className="w-[31] relative -left-2 h-[31] "
        source={assets.profile4}
      />
    </View>
  );
};
const ForumsTab = ({ setIsCommentModalOpen }) => {
  const navigation = useNavigation();
  return (
    <View className="w-[95%] h-[64%]  mx-auto">
      <FlatList
        className="flex-1"
        data={trendingPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <ForumRow navigation={navigation} />
            <View className="my-[6px] ">
              <ForumRow navigation={navigation} bgColor="#B1FFF2" />
            </View>
            <ForumRow navigation={navigation} bgColor="#FFF0E4" />
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-base mt-3  mb-4 text-[#03045E]"
            >
              Trending Post
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <Post
            item={item}
            navigation={navigation}
            setIsCommentModalOpen={setIsCommentModalOpen}
          />
        )}
      />
    </View>
  );
};

export default ForumsTab;
