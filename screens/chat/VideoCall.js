import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { assets, COLORS } from "../../components/seed/constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { ChatInput } from "../../components/seed";
import { Row } from "./Conversation";

const VideoCall = () => {
  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["30%", "50%", "100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index) => {}, []);
  const receivedM = [
    {
      message:
        "I’m here for you, don’t worry. What symptoms are you experiencing?",
      receivedTime: 2,
    },
    {
      message: "oh so sorry about that. do you have any underlying diseases?",
      receivedTime: 4,
    },
  ];
  return (
    <BottomSheetModalProvider>
      <View className={`flex-1  bg-green-600`}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          className="flex-1 relative"
          source={assets.profile2}
          resizeMode="cover"
        >
          <TouchableOpacity className="h-10 w-10 z-10 flex justify-center items-center absolute top-[8%] left-8 rounded-[10px] bg-white">
            <IonIcon size={24} name="arrow-back" color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[30] w-[30] z-10 flex justify-center items-center absolute top-[24%] right-[15%] rounded-full bg-[#4E7FFF]">
            <Feather size={16} name="repeat" color="white" />
          </TouchableOpacity>
          <View className="bottom-[24%] absolute w-full">
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-center text-lg text-[#EBEBEB] relative z-20"
            >
              Dr Christian
            </Text>
            <Text
              style={{ fontFamily: "ManropeRegular" }}
              className="text-center text-[12px] text-[#ffffff] relative z-20"
            >
              Cardiologist
            </Text>
            <View className="py-1 flex-row z-20 items-center mt-2 mx-auto bg-[#263254] rounded-[40px]  px-3 blur-md space-x-2">
              <View className="h-1  w-1  rounded-full bg-[#4BD759]" />
              <Text
                style={{ fontFamily: "ManropeRegular" }}
                className="text-center text-[12px]  text-[#ffffff]"
              >
                7:49
              </Text>
            </View>
          </View>
          <View className="flex-1 relative top-5">
            <Image source={assets.videoGradient} />
          </View>
        </ImageBackground>
        <View
          style={{ backgroundColor: COLORS.primaryBlue }}
          className="absolute bottom-0 w-full pt-8 pb-[50]"
        >
          <View className="h-[50] w-[90%]  justify-center flex-row space-x-4 mx-auto">
            <TouchableOpacity className="w-[50] h-[50] bg-blue-500 rounded-full flex justify-center items-center">
              <FontAwesome size={21} name="microphone" color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-[50] h-[50] bg-blue-500 rounded-full flex justify-center items-center">
              <IonIcon size={21} name="videocam" color="white" />
            </TouchableOpacity>

            {/* =============================== */}
            <TouchableOpacity className="w-[50] bg-blue-500  h-[50] rounded-full flex justify-center items-center">
              <Feather size={21} name="repeat" color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-[50] bg-blue-500  h-[50] rounded-full flex justify-center items-center">
              <IonIcon size={21} name="chatbubble-ellipses" color="white" />
            </TouchableOpacity>

            <TouchableOpacity className="w-[50] bg-[#EC3B3B]  h-[50] rounded-full flex justify-center items-center">
              <IonIcon size={21} name="call" color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            className=" absolute bottom-3 left-[47%]   -translate-x-1/2  "
          >
            <Feather size={24} name="chevron-up" color="white" />
          </TouchableOpacity>
        </View>
        <View className="bg-gray  relative">
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
          >
            <View>
              <ImageBackground
                resizeMode="cover"
                className="h-[80%]"
                source={assets.profile2}
              />
            </View>
            <View className="w-[90%] relative -top-[200] mx-auto">
              <Row receivedMessages={receivedM} />
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
          </BottomSheetModal>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};

export default VideoCall;
