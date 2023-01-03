import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Header, LightText, TabGeneral } from "../../components/seed";
import { assets, COLORS } from "../../components/seed/constants";
import Feather from "react-native-vector-icons/Feather";
import ForumsTab from "./forum/ForumsTab";
import CommentModal from "./forum/CommentModal";

const DATA = [
  {
    id: "231",
    name: "Dr Christian",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile2,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "232",
    name: "Dr Thomas",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile3,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "233",
    name: "Dr Michael",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile4,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "234",
    name: "Dr Sarah",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile2,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "235",
    name: "Dr Kennedy",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile3,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "236",
    name: "Dr Maxwell",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile4,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "237",
    name: "Dr Jenny",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile2,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
  {
    id: "238",
    name: "Dr Grace",
    message: "Hi Jhon, how can I help you?",
    image: assets.profile2,
    time: "27min",
    chat: {
      from: [
        {
          message:
            "I’m here for you, don’t worry. What symptoms are you experiencing?",
          receivedTime: 2,
        },
        {
          message:
            "oh so sorry about that. do you have any underlying diseases?",
          receivedTime: 4,
        },
      ],
      to: [
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 1,
        },
        {
          message: "hello, doctor, i believe i have the coronavirus as .",
          sentTime: 3,
        },
        {
          message: "Oh no",
          sentTime: 5,
        },
      ],
    },
  },
];

const Row = ({
  item: { name, message, image, time, chat, id },
  navigation,
}) => {
  return (
    <View className="flex-row  justify-between w-[98%] mx-auto ">
      <View className="flex-row items-center space-x-3">
        <Image
          resizeMode="contain"
          className="w-[50] h-[50] rounded-full"
          source={image}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Conversation", {
              data: {
                id,
                name,
                message,
                image,
                time,
                chat,
              },
            })
          }
        >
          <Text
            style={{ fontFamily: "ManropeMedium", color: COLORS.secondaryBlue }}
            className="text-base"
          >
            {name}
          </Text>
          <LightText value={message} />
        </TouchableOpacity>
      </View>
      <LightText value={time} />
    </View>
  );
};

const Home = ({ navigation }) => {
  const [isFirstSelected, setIsFirstSelected] = useState(true);
  const [searchOptionID, setSearchOptionID] = useState(0);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.primaryBlue} barStyle="default" />
      {isCommentModalOpen && (
        <CommentModal setIsCommentModalOpen={setIsCommentModalOpen} />
      )}

      <Header title="Chat & Forums" />
      <View className="w-[90%] mx-auto">
        <View className="mt-5 mb-7">
          <TabGeneral
            firstValue="Chats"
            secondValue="Forums"
            isFirstSelected={isFirstSelected}
            setIsFirstSelected={setIsFirstSelected}
          />
        </View>
        <View className="w-[90%] mb-9 mx-auto relative border rounded-[15px] border-[#D2D2D2] py-2 ">
          <TextInput
            style={{ fontFamily: "ManropeRegular" }}
            placeholder="Search"
            className="w-full px-5"
          />
          <View className="absolute right-[15] top-1/2 -translate-y-1/2">
            <Feather size={20} name="search" color="gray" />
          </View>
        </View>
        {!isFirstSelected && (
          <View className="flex-row w-[90%] mx-auto  -mt-5 mb-6 space-x-[3px]">
            {["Popular topics", "Recommendations"].map((text, i) => (
              <TouchableOpacity
                onPress={() => setSearchOptionID(i)}
                key={i}
                className={`py-3 rounded ${
                  searchOptionID === i ? "bg-[#DAE1F3]" : "bg-[#E7ECF5]"
                } px-3`}
              >
                <Text
                  style={{
                    fontFamily:
                      searchOptionID === i ? "ManropeBold" : "ManropeRegular",
                  }}
                  className={`text-xs ${
                    searchOptionID === i ? "text-[#0E214D]" : "text-[#6D7589]"
                  } `}
                >
                  {text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {isFirstSelected ? (
          <View className="h-[80%]">
            <FlatList
              className="flex-1"
              data={DATA}
              keyExtractor={(d) => d.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 180, paddingTop: 10 }}
              ItemSeparatorComponent={() => <View className="mb-6 " />}
              renderItem={({ item }) => (
                <Row navigation={navigation} item={item} />
              )}
            />
          </View>
        ) : (
          <ForumsTab setIsCommentModalOpen={setIsCommentModalOpen} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
