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
import {
  Backbtn,
  ChatInput,
  Header,
  LightText,
  LightTextWhite,
  TabGeneral,
} from "../../components/seed";
import { assets, COLORS } from "../../components/seed/constants";
import Feather from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";

export const Row = ({ receivedMessages, sentMessages }) => {
  return (
    <View className="flex space-y-5">
      {receivedMessages.map((d, i) => (
        <View key={i.toString()} style={{ backgroundColor: "transparent" }}>
          <View
            style={{ backgroundColor: COLORS.primaryBlue }}
            className="pl-4 pr-3 mr-3 relative self-end py-[18] w-[78%]  rounded-bl-2xl rounded-tl-2xl  rounded-tr-2xl "
          >
            <LightTextWhite value={d.message} />
          </View>
          <View className="self-end flex-row space-x-2 items-center mt-1 mr-3">
            <LightText value="10:13" />
            <IonIcon
              size={16}
              name="checkmark-outline"
              color={COLORS.primaryBlue}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const Conversation = ({ route, navigation }) => {
  const { data } = route.params;
  const receivedMessages = data.chat.from;
  const sentMessages = data.chat.to;
  const name = data.name;
  const image = data.image;
  const [isFirstSelected, setIsFirstSelected] = useState(true);
  return (
    <SafeAreaView className="flex-1 pt-[8%]">
      <StatusBar backgroundColor={COLORS.primaryBlue} barStyle="default" />
      <View className="relative mt-3 ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 left-5 top-3"
        >
          <Image source={assets.backArrow} />
        </TouchableOpacity>
        <View className="flex-row ml-[18%] w-[90%] space-x-[12%] items-center">
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                className="w-10 h-10 rounded-full"
                source={image}
              />
            </TouchableOpacity>
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-base text-center text-[#070C18]"
            >
              {name}
            </Text>
          </View>
          <View className="flex-row justify-self-end space-x-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("VideoCall")}
              className="bg-white p-2 rounded-[10px]"
            >
              <IonIcon size={21} name="call" color={COLORS.primaryBlue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("VideoCall")}
              className="bg-white p-2 rounded-[10px]"
            >
              <IonIcon size={21} name="videocam" color={COLORS.primaryBlue} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="w-[90%] mt-10 mx-auto">
        <Row receivedMessages={receivedMessages} sentMessages={sentMessages} />
      </View>
      <View className="absolute bottom-5 w-full ">
        <View className="w-[90%] flex-row items-center space-x-2 mx-auto ">
          <ChatInput />
          <TouchableOpacity
            style={{ backgroundColor: COLORS.primaryBlue }}
            className="h-[48] w-[48] rounded-full flex justify-center items-center "
          >
            <IonIcon size={24} name="send" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;
