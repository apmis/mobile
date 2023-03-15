import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { Accordion } from "react-native-animated-accordion";
import { StatusBar } from "react-native";
import { assets } from "../components/seed/constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  Btn,
  Header,
  InputWithLabel,
  InputWithLabelAuth,
  Label,
} from "../components/seed";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { createUserProfile } from "../utils/auth/schemas";
import { LgaSelect, Select, StateSelect } from "../components/seed/Select";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PatientProfile = ({ navigation }) => {
  // const { deviceWidth, deviceHeight } = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [image, setImage] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    gender: "",
    dob: "",
    religion: "",
    profession: "",
    maritalStatus: "",
    country: "",
    residentialAddress: "",
    state: "",
    localgov: "",
    town: "",
    city: "",
    neighbourhood: "",
    streetAddress: "",
  };

  const submitHandler = (data) => {
    console.log(data);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setIsModalVisible(false);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      try {
        await AsyncStorage.setItem("uri", result.assets[0].uri);
        console.log(`Data with key uri has been successfully stored.`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    console.log(image);
    (async () => {
      try {
        const value = await AsyncStorage.getItem("uri");
        if (value !== null) {
          console.log(
            `Data with key uri has been successfully retrieved. Value: ${value}`
          );
          setImage(value);
          return value;
        } else {
          console.log(`Data with key uri does not exist.`);
          return null;
        }
      } catch (error) {
        console.log(error.message);
        return null;
      }
    })();
  }, [image]);
  return (
    <SafeAreaView style={{}} className="pt-[7%]">
      <View className="relative pb-2 ">
        <Header title="My Profile" />
      </View>
      {/* ----------------------IMAGE SELECTION MODAL------------------- */}
      {isModalVisible && (
        <>
          <Pressable
            onPress={() => setIsModalVisible(false)}
            className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-[#000000]/50"
          />
          <View className="absolute top-0 bottom-0 left-0 right-0">
            <View className="h-[20%]  w-[90%] mx-auto z-30 top-[25%] py-10 pl-[30px]  rounded-[10px] bg-white">
              <TouchableOpacity onPress={pickImage}>
                <Text
                  style={{ fontFamily: "ManropeSemibold" }}
                  className="text-base align-middle text-[#475464]"
                >
                  Upload From Gallery
                </Text>
              </TouchableOpacity>
              <View className="my-4 w-[90%] opacity-20 h-[1px] bg-[#475464]" />
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text
                  style={{ fontFamily: "ManropeSemibold" }}
                  className="text-base text-[#475464]"
                >
                  Take Live Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="w-[100%] mt-[25%] h-[170px] mb-[34px] bg-[#E4F3FE] flex-row space-x-2">
          <View className="mx-auto relative -top-14">
            <View className="relative">
              <Image
                source={{
                  uri:
                    image ||
                    "https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1vaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                }}
                className="rounded-2xl w-[160px] h-[170px]"
              />
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Image
                  source={assets.changeProfileImage}
                  className="-right-2 absolute -bottom-2"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontFamily: "ManropeSemibold" }}
              className="text-base text-center mt-5 text-[#070C18]"
            >
              Christian Peters
            </Text>
          </View>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={createUserProfile}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <View className="mb-5">
                {/* TAB 1 */}
                <View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="First Name"
                      placeholder="Christian"
                      onBlur={handleBlur("firstName")}
                      changeHandler={handleChange("firstName")}
                      inputValue={values.firstName}
                    />
                    {errors.firstName && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.firstName}
                      </Text>
                    )}
                  </View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="Last Name"
                      placeholder="Peters"
                      onBlur={handleBlur("lastName")}
                      changeHandler={handleChange("lastName")}
                      inputValue={values.lastName}
                    />
                    {errors.lastName && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.lastName}
                      </Text>
                    )}
                  </View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="Middle Name"
                      placeholder="Chigozie"
                      onBlur={handleBlur("middleName")}
                      changeHandler={handleChange("middleName")}
                      inputValue={values.middleName}
                    />
                    {errors.middleName && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.middleName}
                      </Text>
                    )}
                  </View>
                </View>

                {/* ------------------ BIO-DATA ACCORDION ----------------------- */}
                <View>
                  <Accordion
                    parentContainerStyles={{
                      marginHorizontal: "5%",
                      marginVertical: "5%",
                    }}
                    headerText="BIO DATA"
                    headerTextStyles={{
                      fontFamily: "ManropeExtrBold",
                      paddingLeft: 18,
                      fontSize: 18,
                    }}
                  >
                    <View style={{ padding: 10 }}>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Email"
                          placeholder="auraqule@gmail.com"
                          onBlur={handleBlur("email")}
                          changeHandler={handleChange("email")}
                          inputValue={values.email}
                        />
                        {errors.email && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.email}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Phone Number 1"
                          placeholder="07066389644"
                          onBlur={handleBlur("phoneNumber1")}
                          changeHandler={handleChange("phoneNumber1")}
                          inputValue={values.phoneNumber1}
                        />
                        {errors.phoneNumber1 && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.phoneNumber1}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Phone Number 2"
                          placeholder="08066389644"
                          onBlur={handleBlur("phoneNumber2")}
                          changeHandler={handleChange("phoneNumber2")}
                          inputValue={values.phoneNumber2}
                        />
                        {errors.phoneNumber2 && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.phoneNumber2}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* <InputWithLabelAuth
                          labelValue="Gender"
                          placeholder="select"
                          onBlur={handleBlur("gender")}
                          changeHandler={handleChange("gender")}
                          inputValue={values.gender}
                        /> */}
                        <Select
                          labelValue="Gender"
                          selectedValue={selectedGender}
                          setSelectedValue={setSelectedGender}
                          list={["Select", "Male", "Female", "Others"]}
                        />
                        {errors.gender && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.gender}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Date of Birth"
                          placeholder="dd/mm/yyy"
                          onBlur={handleBlur("dob")}
                          changeHandler={handleChange("dob")}
                          inputValue={values.dob}
                        />
                        {errors.dob && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.dob}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* <InputWithLabelAuth
                          labelValue="Religion"
                          placeholder="select"
                          onBlur={handleBlur("religion")}
                          changeHandler={handleChange("religion")}
                          inputValue={values.religion}
                        /> */}
                        <Select
                          labelValue="Religion"
                          selectedValue={selectedReligion}
                          setSelectedValue={setSelectedReligion}
                          list={["Select", "Christianity", "Islam", "Others"]}
                        />
                        {errors.religion && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.religion}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Profession"
                          placeholder="enter profession"
                          onBlur={handleBlur("profession")}
                          changeHandler={handleChange("profession")}
                          inputValue={values.profession}
                        />
                        {errors.profession && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.profession}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* <InputWithLabelAuth
                          labelValue="Marital Status"
                          placeholder="select"
                          onBlur={handleBlur("maritalStatus")}
                          changeHandler={handleChange("maritalStatus")}
                          inputValue={values.maritalStatus}
                        /> */}
                        <Select
                          labelValue="Marital Status"
                          selectedValue={selectedMaritalStatus}
                          setSelectedValue={setSelectedMaritalStatus}
                          list={["Select", "Married", "Single", "Others"]}
                        />
                        {errors.maritalStatus && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.maritalStatus}
                          </Text>
                        )}
                      </View>
                    </View>
                  </Accordion>
                </View>

                {/* ------------------------- ADDRESS ACCORDION ---------------------------------- */}
                <View className="mb-16">
                  <Accordion
                    parentContainerStyles={{
                      marginHorizontal: "5%",
                    }}
                    headerText="ADDRESS"
                    headerTextStyles={{
                      fontFamily: "ManropeExtrBold",
                      paddingLeft: 18,
                      fontSize: 18,
                    }}
                  >
                    <View style={{ padding: 10 }}>
                      <View className="mb-5">
                        {/* <InputWithLabelAuth
                          labelValue="Country"
                          placeholder="Nigeria"
                          onBlur={handleBlur("country")}
                          changeHandler={handleChange("country")}
                          inputValue={values.country}
                        /> */}
                        <Select
                          labelValue="Country"
                          selectedValue={selectedCountry}
                          setSelectedValue={setSelectedCountry}
                          list={["Nigeria"]}
                        />
                        {errors.country && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.country}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Residential address"
                          placeholder="enter address"
                          onBlur={handleBlur("residentialAddress")}
                          changeHandler={handleChange("residentialAddress")}
                          inputValue={values.residentialAddress}
                        />
                        {errors.residentialAddress && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.residentialAddress}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* STATE SELECT */}
                        <StateSelect
                          selectedValue={selectedState}
                          setSelectedValue={setSelectedState}
                        />
                      </View>
                      <View className="mb-5">
                        <LgaSelect
                          selectedValue={selectedLga}
                          setSelectedValue={setSelectedLga}
                          selectedState={selectedState}
                        />
                        {/* <InputWithLabelAuth
                          labelValue="Local Government"
                          placeholder="select"
                          onBlur={handleBlur("localgov")}
                          changeHandler={handleChange("localgov")}
                          inputValue={values.localgov}
                        />
                        {errors.localgov && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.localgov}
                          </Text>
                        )} */}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Town"
                          placeholder="enter town"
                          onBlur={handleBlur("town")}
                          changeHandler={handleChange("town")}
                          inputValue={values.town}
                        />
                        {errors.town && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.town}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="City"
                          placeholder="enter city"
                          onBlur={handleBlur("city")}
                          changeHandler={handleChange("city")}
                          inputValue={values.city}
                        />
                        {errors.city && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.city}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Neighourhood"
                          placeholder="enter address"
                          onBlur={handleBlur("neighbourhood")}
                          changeHandler={handleChange("neighbourhood")}
                          inputValue={values.neighbourhood}
                        />
                        {errors.neighbourhood && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.neighbourhood}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Street address"
                          placeholder="enter address"
                          onBlur={handleBlur("streetAddress")}
                          changeHandler={handleChange("streetAddress")}
                          inputValue={values.streetAddress}
                        />
                        {errors.streetAddress && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.streetAddress}
                          </Text>
                        )}
                      </View>
                      <View className="mt-4 px-3 mb-[72px]">
                        <BouncyCheckbox
                          size={25}
                          fillColor="#0364FF"
                          unfillColor="#FFFFFF"
                          text="I give the doctor consent to see my Health Profile during my appointment and/ or treatment."
                          iconStyle={{ borderColor: "#0364FF" }}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{
                            fontFamily: "ManropeRegular",
                            fontSize: 14,
                            textDecorationLine: "none",
                          }}
                        />
                      </View>
                      <View className="pb-[49px]">
                        <Btn
                          onPressHandler={handleSubmit}
                          value="Save Changes"
                        />
                      </View>
                    </View>
                  </Accordion>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientProfile;
