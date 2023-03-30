import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommentModal = ({ setIsCommentModalOpen }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setIsCommentModalOpen(false)}
        className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-[#000000]/50"
      />
      <View className="w-[90%] mx-auto z-30 mt-[25%] rounded bg-white h-[400] px-[30] pt-[26] pb-10">
        <View className="flex-row justify-between items-center">
          <Text style={{ fontFamily: "ManropeMedium" }} className="text-black">
            Comment
          </Text>
          <TouchableOpacity onPress={() => setIsCommentModalOpen(false)}>
            <MaterialIcons size={24} name="clear" color="#292D32" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={{ fontFamily: "ManropeRegular", textAlignVertical: "top" }}
          className={`w-full flex-1 mt-6 mb-10 bg-transparent ${
            isFocused ? "border-[#0364FF]" : "border-[#d2d2d2]"
          } text-[#6D7589] text-sm px-6 py-4 mx-auto  rounded-md border-[1px]`}
          placeholder="Type here..."
          multiline={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          //   keyboardType={keyboardType}
          //   onChangeText={changeHandler}
          //   value={value}
        />
        <View className="w-full flex-row justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity>
              <Feather size={31} name="image" color="#6D7589" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons size={31} name="location-outline" color="#6D7589" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather size={31} name="smile" color="#6D7589" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="py-2 px-6 rounded bg-[#0364FF]">
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-white text-base"
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CommentModal;
