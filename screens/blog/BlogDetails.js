import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Btn, Header, LightText, LightTextBase } from "../../components/seed";

const BlogDetails = ({ route }) => {
  const {
    data: { image, author, article, publishedDate },
  } = route.params;
  return (
    <SafeAreaView className="flex-1 relative">
      <Header title=" Health Blog" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-[85%] mt-[10%]  mx-auto"
      >
        <Image
          source={image}
          resizeMode="cover"
          className="w-full  h-[204px] rounded-sm"
        />
        <View className="w-full mt-4 mb-5 ">
          <LightText textColor="#444444" value={`Written by ${author}`} />
        </View>
        <View className="mb-16">
          <LightTextBase value={article} />
        </View>
      </ScrollView>
      <View className="w-full  h-[63] flex justify-center items-center bg-gray-100 backdrop-blur-3xl rounded-md absolute bottom-0">
        <Btn value="Share with friends" />
      </View>
    </SafeAreaView>
  );
};

export default BlogDetails;
