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
import { assets, COLORS } from "../components/seed/constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  Btn,
  Header,
  InputWithLabel,
  InputWithLabelAuth,
  LabelSmall,
} from "../components/seed";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { createUserProfile } from "../utils/auth/schemas";
import { LgaSelect, Select, StateSelect } from "../components/seed/Select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import dateHandler from "../utils/functions/date";
import client from "../feathers";
const PatientProfile = ({ navigation, route }) => {
  const { firstname, lastname, email, _id } = route.params;
  console.log(route.params);
  // const { deviceWidth, deviceHeight } = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAcceptTerms, setIsAcceptTerms] = useState(false);
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [religion, setReligion] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [isComplete, setIscomplete] = useState(null);
  const [dob, setDob] = useState(new Date());
  const [dobValue, setDobValue] = useState("");
  const [show, setShow] = useState(false);
  const clientUser = client.service("client");
  const initialValues = {
    firstname: firstname,
    lastname: lastname,
    middlename: "",
    email: email,
    phone: "",
    phone2: "",
    gender: "",
    dob: "",
    religion: "",
    profession: "",
    maritalstatus: "",
    country: "",
    address: "",
    state: "",
    lga: "",
    town: "",
    city: "",
    neighbourhood: "",
    streetAddress: "",
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDob(currentDate);
    setDobValue(dateHandler(currentDate));
    console.log(dateHandler(currentDate));
  };
  const submitHandler = (data) => {
    console.log(data);
    if (
      gender.includes("Select") ||
      !dobValue ||
      religion.includes("Select") ||
      maritalstatus.includes("Select") ||
      state.includes("Select") ||
      lga.includes("Select") ||
      !isAcceptTerms
    ) {
      setIscomplete(false);
      return;
    }
    const updatedObject = {};
    Object.keys(data).forEach((key) => {
      if (
        key === "town" ||
        key === "neighbourhood" ||
        key === "streetAddress" ||
        key === "phone2"
      ) {
        delete data[key];
      } else {
        updatedObject[key] = data[key];
      }
    });
    console.log(updatedObject);
    clientUser
      .create({
        ...updatedObject,
        userId: _id,
        gender,
        dob,
        country,
        state,
        lga,
        religion,
        imageurl,
        maritalstatus,
        facility: {
          _id: "64100ee862eb890014af5194",
        },
      })
      .then((createdClient) => {
        console.log("Object created:", createdClient);
        navigation.navigate("SuccessWithThanks", {
          screen: "Dashboard",
          successMessage:
            "Congratulations! You have successfully Updated your profile",
          btnText: "Home",
        });
      })
      .catch((error) => {
        console.error("Error creating object:", error);
      });
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
      setImageUrl(result.assets[0].uri);
      try {
        await AsyncStorage.setItem("uri", result.assets[0].uri);
        console.log(`Data with key uri has been successfully stored.`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    console.log(imageurl);
    (async () => {
      try {
        const value = await AsyncStorage.getItem("uri");
        if (value !== null) {
          console.log(
            `Data with key uri has been successfully retrieved. Value: ${value}`
          );
          setImageUrl(value);
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
  }, [imageurl]);
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
                    imageurl ||
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
              className="text-base capitalize text-center mt-5 text-[#070C18]"
            >
              {`${firstname} ${lastname}`}
            </Text>
          </View>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={createUserProfile}
          onSubmit={(values) => {
            console.log(values);
            submitHandler(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              {/* {console.log(errors)} */}
              <View className="mb-5">
                {/* TAB 1 */}
                <View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="First Name"
                      placeholder="Christian"
                      onBlur={handleBlur("firstname")}
                      changeHandler={handleChange("firstname")}
                      inputValue={values.firstname}
                    />
                    {errors.firstname && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.firstname}
                      </Text>
                    )}
                  </View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="Last Name"
                      placeholder="Peters"
                      onBlur={handleBlur("lastname")}
                      changeHandler={handleChange("lastname")}
                      inputValue={values.lastname}
                    />
                    {errors.lastname && !lastnameRef && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.lastname}
                      </Text>
                    )}
                  </View>
                  <View className="mb-5">
                    <InputWithLabelAuth
                      labelValue="Middle Name"
                      placeholder="Enter middle name"
                      onBlur={handleBlur("middlename")}
                      changeHandler={handleChange("middlename")}
                      inputValue={values.middlename}
                    />
                    {errors.middlename && (
                      <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                        {errors.middlename}
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
                          isEditable={false}
                          labelValue="Email"
                          placeholder="auraqule@gmail.com"
                          onBlur={handleBlur("email")}
                          changeHandler={handleChange("email")}
                          inputValue={values.email}
                        />
                        {errors.email && !emailRef && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.email}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Phone Number 1"
                          keyboardType={"numeric"}
                          placeholder="Ex. 07066389644"
                          onBlur={handleBlur("phone")}
                          changeHandler={handleChange("phone")}
                          inputValue={values.phone}
                        />
                        {errors.phone && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.phone}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Phone Number 2"
                          keyboardType={"numeric"}
                          placeholder="Ex. 08066389644"
                          onBlur={handleBlur("phone2")}
                          changeHandler={handleChange("phone2")}
                          inputValue={values.phone2}
                        />
                        {errors.phone2 && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.phone2}
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
                          selectedValue={gender}
                          setSelectedValue={setGender}
                          list={["Select", "Male", "Female", "Others"]}
                        />
                        {!isComplete && !gender && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Select your gender
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* <InputWithLabelAuth
                          labelValue="Date of Birth"
                          placeholder="dd/mm/yyy"
                          onBlur={handleBlur("dob")}
                          changeHandler={handleChange("dob")}
                          inputValue={values.dob}
                        /> */}
                        <Text
                          style={{ fontFamily: "ManropeRegular" }}
                          className="mb-2 text-base ml-4 text-black"
                        >
                          Date of birth
                        </Text>
                        <TouchableOpacity
                          onPress={() => setShow(true)}
                          // style={{ backgroundColor: COLORS.primaryBlue }}
                          className={`py-3 rounded-[4px] border-[1px] border-gray-300  w-[90%] mx-auto px-4`}
                        >
                          <Text
                            style={{ fontFamily: "ManropeRegular" }}
                            className="text-small text-gray-500"
                          >
                            {dobValue ? dobValue : "Enter date of birth"}
                          </Text>
                        </TouchableOpacity>
                        {show && (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={dob}
                            mode={"date"}
                            is24Hour={true}
                            onChange={onChange}
                          />
                        )}
                        {!isComplete && !dobValue && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Enter your date of birth
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
                          selectedValue={religion}
                          setSelectedValue={setReligion}
                          list={["Select", "Christianity", "Islam", "Others"]}
                        />
                        {!isComplete && !religion && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Select your religion
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Profession"
                          placeholder="Enter profession"
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
                          selectedValue={maritalstatus}
                          setSelectedValue={setMaritalStatus}
                          list={["Select", "Married", "Single", "Others"]}
                        />
                        {!isComplete && !maritalstatus && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Select your marital status
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
                          selectedValue={country}
                          setSelectedValue={setCountry}
                          list={["Nigeria"]}
                        />
                        {/* {errors.country && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.country}
                          </Text>
                        )} */}
                      </View>
                      <View className="mb-5">
                        <InputWithLabelAuth
                          labelValue="Residential address"
                          placeholder="Enter address"
                          onBlur={handleBlur("address")}
                          changeHandler={handleChange("address")}
                          inputValue={values.address}
                        />
                        {errors.address && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            {errors.address}
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        {/* STATE SELECT */}
                        <StateSelect
                          selectedValue={state}
                          setSelectedValue={setState}
                        />
                        {!isComplete && !state && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Select state
                          </Text>
                        )}
                      </View>
                      <View className="mb-5">
                        <LgaSelect
                          selectedValue={lga}
                          setSelectedValue={setLga}
                          selectedState={state}
                        />
                        {/*     <InputWithLabelAuth
                          labelValue="Local Government"
                          placeholder="select"
                          onBlur={handleBlur("localgov")}
                          changeHandler={handleChange("localgov")}
                          inputValue={values.localgov}
                        /> */}
                        {!isComplete && !lga && (
                          <Text className="text-red-500 text-[11px] ml-[6%] mt-1">
                            Select your local government
                          </Text>
                        )}
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
                          placeholder="Enter address"
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
                          onPress={() => setIsAcceptTerms((prev) => !prev)}
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
