import { TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Backbtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="absolute z-10 left-5 top-[2px]"
    >
      <MaterialIcons size={23} name="keyboard-backspace" />
    </TouchableOpacity>
  );
};

export default Backbtn;
