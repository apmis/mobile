import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export const SearchInput = ({
  placeholder = "Search",
  search,
  setSearch,
  setIsSubmitSearch,
}) => {
  const searchChangeHandler = (text) => {
    setSearch(text);
  };
  return (
    <View
      style={{ shadowColor: "#000000", elevation: 12 }}
      className="w-full flex-row justify-between items-center rounded pl-4 pr-3 py-2  bg-white"
    >
      <TextInput
        value={search}
        onChangeText={searchChangeHandler}
        onSubmitEditing={() => setIsSubmitSearch(true)}
        style={{ fontFamily: "ManropeRegular", flexGrow: 1 }}
        placeholder={placeholder}
      />

      {!search ? (
        <TouchableOpacity>
          <IonIcon name="location-sharp" color="#0364FF" size={24} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setSearch("")}>
          <MaterialIcon name="cancel" color="#F0143C" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};
