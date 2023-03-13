import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../Global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { assets, COLORS } from "../../../components/seed/constants";
import { LightBlueText } from "../../../components/seed";
const hospitalData = [
  {
    id: "1",
    name: "Dakorea Hospital",
    address: "8502 Preston Rd. Inglewood, Lagos",
    distance: "1km away",
  },
  {
    id: "2",
    name: "Alpha 2 Hospital",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    id: "3",
    name: "Omega Hospital",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    id: "4",
    name: "Keysar Hospital",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    id: "5",
    name: "Ayodele Hospital",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
];
const Row = ({
  item: { id, name, address, distance },
  selectHospitalHandler,
}) => {
  const handleSelection = (d) => {
    selectHospitalHandler(d);
  };
  return (
    <TouchableOpacity
      onPress={() => handleSelection({ id, name, address, distance })}
      className="flex-row mb-6 items-center justify-between"
    >
      <View>
        <Text
          style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
          className="text mb-1"
        >
          {name}
        </Text>
        <Text
          style={{ fontFamily: "ManropeRegular", color: COLORS.secondaryBlue }}
          className="text"
        >
          {address}
        </Text>
      </View>
      <View>
        <Text
          style={{ fontFamily: "ManropeRegular" }}
          className="text-xs text-[#6E6D6D]"
        >
          {distance}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Card = ({
  navigation,
  selectedHospital: { id, name, address, distance },
}) => {
  return (
    <View className="bg-white w-[95%] mx-auto rounded py-4 px-3 flex-row items-center space-x-3">
      <Image
        resizeMode="cover"
        className="w-[96] h-[144]"
        source={assets.hospital}
      />
      <View>
        <Text
          style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
          className="text-base mb-1"
        >
          {name}
        </Text>
        {/* RATING */}
        <View className="flex-row items-center mt-[2] space-x-2">
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-xs text-[#6E6D6D]"
          >
            4.1
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {[1, 2, 3, 4, 5].map((item, i) => (
              <Ionicons
                key={i}
                name="star"
                style={{
                  color: "#ffbd14",
                  fontSize: 16,
                }}
              />
            ))}
          </View>
        </View>
        <View className="flex-row mt-2 mb-2 items-center space-x-2">
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-xs text-green-500"
          >
            Open
          </Text>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-xs text-[#6E6D6D]"
          >
            From 09:00am to 09:00pm
          </Text>
        </View>
        {/* DISTANCE */}
        <View>
          <Text
            style={{ fontFamily: "ManropeRegular" }}
            className="text-xs text-[#6E6D6D]"
          >
            {distance}
          </Text>
        </View>
        <View className="flex-row space-x-2 mt-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("HospitalDirection")}
            className="bg-[#E5EFFB] flex-row items-center space-x-1 rounded py-2 px-2"
          >
            <Ionicons size={24} name="compass-outline" color="#0364FF" />
            <View className="ml-1">
              <LightBlueText value="Get Directions" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#E5EFFB] flex-row items-center space-x-1 rounded py-2 px-2">
            <Ionicons size={18} name="call-outline" color="#0364FF" />
            <View className="ml-1">
              <LightBlueText value="Call" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const SearchHospitalHome = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [isSubmitSearch, setIsSubmitSearch] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState({});

  const selectHospitalHandler = (hospitalInfo) => {
    setIsSubmitSearch(false);
    setSelectedHospital(hospitalInfo);
  };
  return (
    <SafeAreaView className="flex-1 relative bg-[#f3f3f3] pt-[7%]">
      <View className="m-[10%]">
        <SearchInput
          search={search}
          setSearch={setSearch}
          setIsSubmitSearch={setIsSubmitSearch}
          placeholder="Your current location"
        />
      </View>
      {selectedHospital.name && (
        <View className=" w-full absolute  bottom-0 ">
          <Card navigation={navigation} selectedHospital={selectedHospital} />
        </View>
      )}
      {isSubmitSearch && (
        <View className="flex-1">
          <View>
            <Text className="text-2xl text-center text-[#0364FF]">MAP</Text>
          </View>
          <View className="w-full pt-6 bg-white h-[65%] absolute bottom-0">
            <FlatList
              className="w-[90%] mx-auto"
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text
                  style={{
                    fontFamily: "ManropeBold",
                    color: COLORS.secondaryBlue,
                  }}
                  className="text-lg mb-5"
                >
                  Hospitals near you
                </Text>
              }
              data={hospitalData}
              keyExtractor={(data, i) => i.toString()}
              renderItem={({ item }) => (
                <Row
                  item={item}
                  navigation={navigation}
                  selectHospitalHandler={selectHospitalHandler}
                />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchHospitalHome;
