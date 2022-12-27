import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Search from "react-native-vector-icons/EvilIcons";
import MateriaCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import { assets, COLORS } from "../components/seed/constants";
import { AppointmentCard } from "../components/seed";
const Dashboard = ({ navigation }) => {
  const [isClose, setIsClose] = useState(false);
  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["25%", "40%", "100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index) => {}, []);
  const handleModal = () => {
    Keyboard.dismiss();
    handlePresentModalPress();
  };
  return (
    <BottomSheetModalProvider>
      {/* This style was initially added into SafeAreaView 👉  style={{ paddingTop: StatusBar.currentHeight }}   */}
      <SafeAreaView>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <View
          style={{ backgroundColor: COLORS.primaryBlue }}
          className="w-full py-3 px-[29]"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PatientProfile")}
          >
            <Text
              style={{ fontFamily: "ManropeRegular" }}
              className="text-white text-base"
            >
              Complete Your Profile
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="flex-row items-center w-[90%] mx-auto mt-[20] justify-between">
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity>
                <Image
                  className="rounded-full h-[46] w-[46]"
                  source={assets.profilePic}
                />
              </TouchableOpacity>
              <View>
                <Text
                  className="text-base"
                  style={{ fontFamily: "ManropeBold" }}
                >
                  Hello, Christian
                </Text>
                <Text
                  className="text-[10px] text-[#444444]"
                  style={{ fontFamily: "ManropeLight" }}
                >
                  I’m sure you’re good
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              className="w-6 h-6 relative bg-[#6D7589] rounded-md"
            >
              <View className="rounded-full items-center justify-center absolute -top-1 right-0 h-[12] w-[12] bg-[#ffffff]">
                <View className="rounded-full  h-[10] w-[10] bg-[#66C27C]" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-white w-[90%] py-[10] mt-[30] mb-[0] mx-auto rounded-[10px]">
            <View className="flex-row px-[21] items-center space-x-1">
              <Search name="search" color="gray" size={24} />
              <TextInput
                onFocus={() => handleModal()}
                placeholder="Search"
                placeholderTextColor="#8F8F8F"
                style={{
                  fontFamily: "ManropeLight",
                  width: "100%",
                }}
              />
            </View>
          </View>
          <Text
            className="text-center mt-[36] mb-[20] text-[18]"
            style={{ fontFamily: "ManropeBold" }}
          >
            What do you want to do with your health?
          </Text>

          <View className="h-[178] w-[96%] mx-auto justify-center space-x-2 flex-row">
            <View className="h-full w-[45%] pt-8 rounded-[10px] flex justify-center items-center bg-[#FCE6D8]">
              <TouchableOpacity>
                <Image source={assets.record} />
                <Text
                  className="text-center mt-[17] mb-[20] text-[18]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  View record
                </Text>
              </TouchableOpacity>
            </View>
            <View className="space-y-2 w-[45%]">
              <TouchableOpacity className="h-[47%] rounded-[10px] relative px-[14] py-[11] bg-[#FFF2D0]">
                <Image source={assets.read} />
                <Text
                  className="text-center absolute right-5 bottom-3 mt-[17] mb-[12] text-[18]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Read
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-[47%] rounded-[10px] relative px-[14] py-[11] bg-[#E4D9FC]">
                <Image source={assets.buy} />
                <Text
                  className="text-center absolute right-5 bottom-3 mt-[17] mb-[12] text-[18]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="py-[13] relative rounded-[10px] mt-2 px-[21] w-[90%] mx-auto bg-[#CFE8FF]">
            <Image source={assets.chat} />
            <Text
              className="text-center absolute left-28 bottom-3 mt-[17] mb-[12] text-[18]"
              style={{ fontFamily: "ManropeSemibold" }}
            >
              Chat & Forums
            </Text>
          </TouchableOpacity>
          <View className="flex-row  mt-[27] mb-5 items-center justify-between w-[90%] mx-auto">
            <Text
              className="text-center  text-[18]"
              style={{ fontFamily: "ManropeBold" }}
            >
              Appointments
            </Text>
            <TouchableOpacity>
              <Text
                className="text-center text-[#0364FF] text-[14] mr-2"
                style={{ fontFamily: "ManropeMedium" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mb-12">
            <AppointmentCard />
          </View>
        </ScrollView>
        <View className="bg-gray relative">
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
          >
            <TouchableOpacity
              onPress={handleDismissModal}
              className="absolute right-8 top-1"
            >
              <IonIcon name="close-outline" size={30} />
            </TouchableOpacity>

            <View className="flex-1 py-[10%] space-y-8 px-[25]">
              <View className="flex-row items-center space-x-3">
                <FontAwesome5 color="#0E214D" name="hospital" size={20} />

                <Text
                  className="text-center text-[#0E214D] text-base"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Healthcare Facility
                </Text>
              </View>
              <View className="flex-row items-center space-x-3">
                <Foundation name="first-aid" color="#0E214D" size={24} />
                <Text
                  className="text-center text-base text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Healthcare Professionals
                </Text>
              </View>
              <View className="flex-row items-center space-x-3">
                <MateriaCommunityIcon
                  color="#0E214D"
                  name="ambulance"
                  size={24}
                />
                <Text
                  className="text-center text-base text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Ambulance
                </Text>
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default Dashboard;
