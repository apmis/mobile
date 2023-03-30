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
  Pressable,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Search from "react-native-vector-icons/EvilIcons";
import MateriaCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import Fontisto from "react-native-vector-icons/Fontisto";
import { assets, COLORS } from "../components/seed/constants";
import { AppointmentCard, CustomDrawer } from "../components/seed";
import { useEffect } from "react";
import client from "../feathers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Dashboard = ({ navigation }) => {
  const [isClose, setIsClose] = useState(false);
  const hasUserCompletedProfile = useSelector(
    (state) => state.user.hasUserCompletedProfile
  );
  const [hasCompleteProfile, setHasCompleteProfile] = useState(true);
  const clientUser = client.service("client");
  const [id, setId] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const user = client.service("users");
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
    setIsClose(true);
  }, []);

  const handleSheetChanges = useCallback((index) => {}, []);
  const handleModal = () => {
    // Keyboard.dismiss();
    setIsClose((prev) => !prev);
    // navigation.navigate("SearchHome");
    isClose ? handlePresentModalPress() : handleDismissModal();
  };

  const hasCompletedRegChecker = async () => {
    try {
      async function fetchClientId() {
        try {
          const client_email = await AsyncStorage.getItem("client_email");
          console.log(client_email);
          if (client_email !== null) {
            return client_email.replace(/^"(.*)"$/, "$1");
          }
        } catch (error) {
          console.log(error.message);
          // handle errors here
        }
      }
      const idRes = await fetchClientId();
      setId(idRes);
      const query = {
        email: id,
        // $select: ['id', 'fieldName'],
        $limit: 1,
        // fieldName: { $exists: true, $ne: null }
      };
      const clientUserRes = await clientUser.find({ query });
      // console.log(clientUserRes.data);
      clientUserRes.data.length
        ? setHasCompleteProfile(true)
        : setHasCompleteProfile(false);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const usersRes = await user.find({
        query: {
          email: id,

          $limit: 1,
          // description: { $ne: "" },

          $sort: {
            createdAt: -1,
          },
          $select: ["firstname", "lastname", "email"],
        },
      });

      // console.log(authRes.data[0]);
      console.log("what", usersRes.data[0]);
      setUserInfo(usersRes.data[0]);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    hasCompletedRegChecker();
    fetchUserInfo();
  }, [id]);
  return (
    <BottomSheetModalProvider>
      {/* This style was initially added into SafeAreaView 👉  style={{ paddingTop: StatusBar.currentHeight }}   */}
      <SafeAreaView className="flex-1 pt-[10%] relative bg-[#f3f3f3] ">
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <StatusBar
          backgroundColor={"white"}
          barStyle="dark-content"
          translucent
        />

        {/* <View className="bg-blue-100 w-[50%] h-screen absolute left-0 top-0 z-50"></View> */}
        {!hasCompleteProfile ||
          (!hasUserCompletedProfile && (
            <View
              style={{ backgroundColor: COLORS.primaryBlue }}
              className="w-full py-3 px-[29]"
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PatientProfile", { ...userInfo })
                }
              >
                <Text
                  style={{ fontFamily: "ManropeRegular" }}
                  className="text-white text-base"
                >
                  Complete Your Profile
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="flex-row items-center w-[90%] mx-auto mt-[20] justify-between">
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  className="rounded-full h-[46] w-[46]"
                  source={assets.profilePic}
                />
              </TouchableOpacity>
              <View>
                <Text
                  className="text-base capitalize"
                  style={{ fontFamily: "ManropeBold" }}
                >
                  Hello, {userInfo?.firstname}
                </Text>
                <Text
                  className="text-[10px] text-[#444444]"
                  style={{ fontFamily: "ManropeLight" }}
                >
                  I&apos;m sure you&apos;re good
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
                // onFocus={() => handleModal()}
                placeholder="Search"
                placeholderTextColor="#8F8F8F"
                style={{
                  fontFamily: "ManropeLight",
                }}
                className="flex-1"
              />
              <View className="flex-row items-center space-x-1">
                <View className="h-5 bg-gray-200 w-[1px]" />
                <TouchableOpacity onPress={() => handleModal()}>
                  <MaterialIcons
                    name={isClose ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    color="gray"
                    size={28}
                  />
                </TouchableOpacity>
              </View>
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
              <TouchableOpacity onPress={() => navigation.navigate("View")}>
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
              <TouchableOpacity
                onPress={() => navigation.navigate("Read")}
                className="h-[47%] rounded-[10px] relative px-[14] py-[11] bg-[#FFF2D0]"
              >
                <Image source={assets.read} />
                <Text
                  className="text-center absolute right-5 bottom-3 mt-[17] mb-[12] text-[18]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Read
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Buy")}
                className="h-[47%] rounded-[10px] relative px-[14] py-[11] bg-[#E4D9FC]"
              >
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatHome")}
            className="py-[13] relative rounded-[10px] mt-2 px-[21] w-[90%] mx-auto bg-[#CFE8FF]"
          >
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
            <TouchableOpacity
              onPress={() => navigation.navigate("AppointmentList")}
            >
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
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchHospitalHome")}
                className="flex-row items-center space-x-3"
              >
                <FontAwesome5 color="#0E214D" name="hospital" size={16} />

                <Text
                  className="text-center text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Healthcare Facility
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchDoctorHome")}
                className="flex-row items-center space-x-3"
              >
                <Foundation name="first-aid" color="#0E214D" size={20} />
                <Text
                  className="text-center  text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Healthcare Professionals
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchPharmacyHome")}
                className="flex-row items-center space-x-3"
              >
                <Fontisto name="pills" color="#0E214D" size={18} />
                <Text
                  className="text-center  text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Pharmacy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchAmbulanceHome")}
                className="flex-row items-center space-x-3"
              >
                <MateriaCommunityIcon
                  color="#0E214D"
                  name="ambulance"
                  size={20}
                />
                <Text
                  className="text-center text-[#0E214D]"
                  style={{ fontFamily: "ManropeSemibold" }}
                >
                  Ambulance
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default Dashboard;
