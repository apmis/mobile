import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
          height: btnH ? btnH : 40,
          borderRadius: btnRadius ? btnRadius : 4,
          width: btnW ? btnW : "100%",
          padding: btnPadding ? btnPadding : 8,
          borderColor: borderColor ? borderColor : "#fff",
          borderWidth: borderW ? borderW : 0,
        },
      ]}
    >
      <Text style={txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    color: "teal",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
