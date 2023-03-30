import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../Global";
import { COLORS } from "../../../components/seed/constants";
const hospitalData = [
  {
    name: "Dakorea Hospital Ambo Service",
    address: "8502 Preston Rd. Inglewood, Lagos",
    distance: "1km away",
  },
  {
    name: "Alpha 2 Hospital Ambo Service",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    name: "Omega Hospital Ambo Service",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    name: "Keysar Hospital Ambo Service",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
  {
    name: "Ayodele Hospital Ambo Service",
    address: "6391 Elgin St. Celina, Lagos",
    distance: "1km away",
  },
];
const Row = ({ item: { name, address, distance }, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("HospitalDirection", { data: { name } })
      }
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

const SearchPharmacyHome = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [isSubmitSearch, setIsSubmitSearch] = useState(false);
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
                  Pharmacies near you
                </Text>
              }
              data={hospitalData}
              keyExtractor={(data, i) => i.toString()}
              renderItem={({ item }) => (
                <Row item={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchPharmacyHome;
