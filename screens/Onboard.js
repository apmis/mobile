import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Onboard = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontFamily: "ManropeSemibold",
          backgroundColor: "blue",
        }}
      >
        Onboard
      </Text>
    </SafeAreaView>
  );
};

export default Onboard;
