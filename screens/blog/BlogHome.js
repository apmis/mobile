import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../../components/seed";
import { assets, COLORS } from "../../components/seed/constants";
import { color } from "react-native-reanimated";
const TAB = [
  { title: "Blog" },
  { title: "News" },
  { title: "Blog" },
  { title: "News" },
  { title: "Blog" },
];
const POSTS = [
  {
    image: assets.blog,
    title:
      "Regular intake of fruits and Vegetables helps to boost the immune system",
    article:
      "As you grow, it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal. Vegetables like carrots, cocumber, Cabbage and Pinacus help to stimulate the blood flow and also keep the brain healthy. Researchers have also concluded that it is healthy to take fruits that contains liquid such as pineapple, orange, water melon. This fruits help to nourish the body and reduce the risk of cancer. Vegetables like carrots, cocumber, Cabbage and Pinacus help to stimulate the blood flow and also keep the brain healthy.",
    author: "Christian Peters",
    publishedDate: "Sep 23 2022",
  },
  {
    image: assets.blog,
    title:
      "Regular intake of fruits and Vegetables helps to boost the immune system",
    article:
      "Wisdom is proof of maturation in the nomenclature of spirit beings. it is advised that you increase your intake of vegetablWisdom is proof of maturation in the nomenclature of spirit beings. it is advised that you increase your intake of vegetables, No matter the age you are, always prioritize vegetables over every meal. Vegetables like carrots, cocumber, Cabbage and Pinacus help to stimulate the blood flow and also keep the brain healthy. Researchers have also concluded that it is healthy to take fruits that contains liquid such as pineapple, orange, water melon. This fruits help to nourish the body and reduce the risk of cancer. Vegetables like carrots, cocumber, Cabbage and Pinacus help to stimulate the blood flow and also keep the brain healthy.",
    author: "Gerry Williams",
    publishedDate: "Sep 23 2022",
  },
];
const BlogHome = ({ navigation }) => {
  const [isSelectedTab, setIsSelectedTab] = useState("");
  return (
    <SafeAreaView>
      <Header title="Read" />
      <View className=" w-[85%] mx-auto mt-[10%]">
        <Text
          style={{ fontFamily: "ManropeSemibold", color: COLORS.secondaryBlue }}
          className="text-2xl"
        >
          Read all the latest blog
        </Text>
        <View className="bg-[#888888] relative w-full h-[1.3px] mt-6">
          <View
            className={`h-full absolute ${
              isSelectedTab === "0_key"
                ? "left-0"
                : isSelectedTab === "1_key"
                ? "left-[22%]"
                : isSelectedTab === "2_key"
                ? "left-[45%]"
                : isSelectedTab === "3_key"
                ? "left-[68%]"
                : "left-[90%]"
            } w-8 bg-[#106CFF]`}
          />
        </View>
        <View className="mt-4 flex-row justify-between">
          {TAB.map((d, i) => (
            <TouchableOpacity
              onPress={() => setIsSelectedTab(`${i}_key`)}
              key={`${i}_key`}
            >
              <Text
                style={{
                  fontFamily: "ManropeRegular",
                  color:
                    isSelectedTab === `${i}_key`
                      ? COLORS.primaryBlue
                      : "#666666",
                }}
              >
                {d.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="mt-10">
          <FlatList
            className="h-[82%]"
            data={POSTS}
            keyExtractor={(d, i) => `${i}_key`}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View className="w-[96%] mx-auto h-[1px] mt-7 mb-6  bg-[#CCCCCC]" />
            )}
            contentContainerStyle={{ paddingBottom: 40 }}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  className="w-full h-[204px] rounded-sm"
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BlogDetails", {
                      data: {
                        image: item.image,
                        article: item.article,
                        author: item.author,
                        publishedDate: item.publishedDate,
                      },
                    })
                  }
                >
                  <Text
                    style={{
                      fontFamily: "ManropeSemibold",
                      color: COLORS.secondaryBlue,
                    }}
                    className="text-base mt-4"
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BlogHome;
