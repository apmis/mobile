import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Header, LightTextBase } from "../../../components/seed";
import Octicons from "react-native-vector-icons/Octicons";
import { trendingPost } from "./ForumsTab";
import CommentModal from "./CommentModal";
const Post = ({
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
const ForumDetails = ({ navigation }) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  return (
    <SafeAreaView className="flex-1">
      <Header title={"Cancer Forums"} />
      {isCommentModalOpen && (
        <CommentModal setIsCommentModalOpen={setIsCommentModalOpen} />
      )}
      <View className="h-full mt-7 w-[90%] pb-16 mx-auto">
        <FlatList
          className="flex-1"
          data={trendingPost}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Post
              item={item}
              navigation={navigation}
              setIsCommentModalOpen={setIsCommentModalOpen}
            />
          )}
        />
      </View>
      <View className=" absolute bottom-16 right-10 bg-[#0E214D] w-[64] h-[64]  justify-center items-center rounded-full">
        <TouchableOpacity onPress={() => navigation.navigate("Forums")}>
          <Octicons size={24} name="plus" color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForumDetails;
