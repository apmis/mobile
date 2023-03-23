import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Header, LightBlueText } from "../../../components/seed";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { assets } from "../../../components/seed/constants";
import { useEffect } from "react";
import client from "../../../feathers";
const data = [
  {
    name: "Dr. Bellamy N",
    field: "Viralogist",
    img: assets.profile4,
    rating: 4.5,
  },
  {
    name: "Dr. Bellamy N",
    field: "Viralogist",
    img: assets.profile4,
    rating: 4.5,
  },
  {
    name: "Dr. Bellamy N",
    field: "Viralogist",
    img: assets.profile4,
    rating: 4.5,
  },
  {
    name: "Dr. Bellamy N",
    field: "Viralogist",
    img: assets.profile4,
    rating: 4.5,
  },
  {
    name: "Dr. Bellamy N",
    field: "Viralogist",
    img: assets.profile4,
    rating: 4.5,
  },
];
const Row = ({ item: { firstname, lastname, position, profession } }) => {
  return (
    <View className="bg-white rounded-2xl py-[14] mb-[14] flex-row justify-between items-center px-4">
      <View className="flex-row items-center space-x-4">
        <Image className="w-[50] h-[50]" source={assets.profile4} />
        <View>
          <Text style={{ fontFamily: "ManropeBold" }}>{`${firstname} `}</Text>
          <Text style={{ fontFamily: "ManropeRegular", color: "#6B779A" }}>
            {position || profession}
          </Text>
        </View>
      </View>
      {/* RATINGS */}
      <View className="flex-row  space-x-2 items-center">
        <MaterialIcon name="star" color="#FFBD14" size={16} />
        <Text className="text-xs">4.5</Text>
      </View>
    </View>
  );
};

const SearchDoctorHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const doctors = client.service("employee");
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [data, setData] = useState([
    { firstname: "", lastname: "", position: "" },
  ]);

  const fetch = async () => {
    try {
      const doctorsRes = await doctors.find({
        query: {
          // dest_userId: ["602178f86875b80015e4c5de"],
          // $limit: 4,
          // description: { $ne: "" },
          department: "medical",
          // position: "doctor",
          $sort: {
            createdAt: -1,
          },
          $select: ["firstname", "lastname", "position", "profession"],
        },
      });

      // console.log(authRes.data[0]);
      console.log(doctorsRes.data);
      setData(doctorsRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    setSearchResult(
      data.filter((item) =>
        item.firstname?.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, data]);
  return (
    <SafeAreaView className="flex-1 bg-[#f3f3f3] mb-[60] pt-[7%]">
      <Header title="Find Doctor" />
      <View className="w-[90%] mx-auto">
        <View className="w-full mb-10 pl-5 pr-2 flex-row items-center justify-between rounded-2xl mt-[10%] bg-white">
          <TextInput
            className="py-3 flex-1"
            placeholder="Search for a doctor"
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          <TouchableOpacity
            className="bg-[#0E214D] py-3 px-4 rounded-xl "
            onPress={() => setIsModalOpen((prev) => !prev)}
          >
            <MaterialIcon name="filter-list" color="#ffffff" size={20} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchResult}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => <Row item={item} />}
        />
      </View>
      {isModalOpen && (
        <View className="absolute -bottom-14 p-9 rounded-t-3xl rounded-tr-3xl border-t border-gray-200 bg-white w-full h-[62%]">
          <View className="relative">
            <TouchableOpacity
              onPress={() => setIsModalOpen(false)}
              className="absolute z-30 right-2 -top-3"
            >
              <MaterialIcon name="clear" color="#" size={26} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "ManropeSemibold",
                color: "#0E214D",
                fontSize: 16,
                marginBottom: 20,
              }}
            >
              Categories
            </Text>
            {[
              "Gynaeocologists",
              "Optician",
              "Ppthametrist",
              "Dentist",
              "Surgeon",
            ].map((text, i) => (
              <View key={i.toString()} className="mb-6">
                <LightBlueText color="#0E214D" value={text} />
              </View>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchDoctorHome;
