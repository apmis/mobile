import { View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "./AppText";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function UpperNavigation({
  title,
  back = false,
  color,
  goBack,
  rightIcon = false,
  rightIconName = "options-outline",
  rightIconFunc,
  isCart = false,
  rightIconSize = 30,
}) {
  // const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cartState);
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 10,
        position: "relative",
      }}
    >
      {back ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
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

      <AppText
        style={{
          color: color ? color : "#0E214D",
          fontWeight: "600",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {title}
      </AppText>

      {rightIcon ? (
        <TouchableOpacity
          onPress={rightIconFunc}
          style={{ position: "absolute", right: 20 }}
        >
          <Ionicons
            name={rightIconName}
            style={{
              fontSize: rightIconSize,
            }}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      {isCart && cartItems.length ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("CartDetails")}
          style={{
            height: 20,
            width: 20,
            backgroundColor: "#0364FF",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 10,
            top: -10,
          }}
        >
          <AppText style={{ color: "#fff" }}>{cartItems.length}</AppText>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
