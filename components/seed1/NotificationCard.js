import { View, Text, Modal, Dimensions } from "react-native";
import React from "react";
import AppText from "./AppText";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NotificationCard({ content, show = false, color = "#0364FF" }) {
  const { width } = Dimensions.get("window");
  return (
    // <Modal animationType="slide" visible={show} transparent>

    show ? (
      <View
        style={{
          height: 70,
          backgroundColor: color,
          width: width - 40,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          position: "absolute",
          borderWidth:1,
          borderColor: "#fff",
        }}
      >
        <Ionicons
          style={{ fontSize: 25, color: "white", marginRight: 10 }}
          name="checkmark-circle"
        />
        <AppText style={{ color: "#fff" }}>{content}</AppText>
      </View>
    ) : (
      <></>
    )

    // </Modal>
  );
}
