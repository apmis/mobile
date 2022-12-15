import { SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";

export default function Bar({ hideBar }) {
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="black" hidden={hideBar} />
    </SafeAreaView>
  );
}
