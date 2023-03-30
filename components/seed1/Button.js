import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function Button({
  title,
  onPressProp,
  bgColor,
  btnH,
  txtStyle,
  btnRadius,
  btnW,
  btnPadding,
  borderColor,
  borderW,
}) {
  return (
    <TouchableOpacity
      onPress={onPressProp}
      style={[
        styles.btn,
        {
          backgroundColor: bgColor ? bgColor : "#0364FF",
          height: btnH ? btnH : 44,
          borderRadius: btnRadius ? btnRadius : 4,
          width: btnW ? btnW : "100%",
          padding: btnPadding ? btnPadding : 8,
          borderColor: borderColor ? borderColor : "#fff",
          borderWidth: borderW ? borderW : 0,
        },
      ]}
    >
      <AppText style={txtStyle}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
