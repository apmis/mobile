import { SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";

export default function Bar({ hideBar }) {
  return (
    <SafeAreaView className="pt-[7%]">
      <StatusBar animated={true} backgroundColor="white" hidden={hideBar} />
    </SafeAreaView>
  );
}
