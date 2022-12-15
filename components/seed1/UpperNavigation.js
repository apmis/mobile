import {
  Pressable,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function UpperNavigation({
  title,
  back = false,
  color,
  goBack,
  rightIcon = false,
  rightIconName = "options-outline",
  rightIconFunc,
}) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        position: "relative",
      }}
    >
      {back ? (
        <TouchableOpacity
          onPress={goBack}
          style={{ position: "absolute", left: 20 }}
        >
          <Ionicons
            name="arrow-back-outline"
            style={{
              fontSize: 26,
            }}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <Text
        style={{
          color: color ? color : "#0E214D",
          fontWeight: "600",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {title}
      </Text>

      {rightIcon ? (
        <TouchableOpacity
          onPress={rightIconFunc}
          style={{ position: "absolute", right: 20 }}
        >
          <Ionicons
            name={rightIconName}
            style={{
              fontSize: 26,
            }}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
