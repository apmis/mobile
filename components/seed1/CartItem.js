import { View, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "./AppText";
import { useDispatch } from "react-redux";
import { useAppHooks } from "../../hooks/seed1/useAppHooks";
import {
  addToCart,
  reduceQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

export default function CartItem({ product, setShowNotification }) {
  const dispatch = useDispatch();
  const { numberWithCommas } = useAppHooks();
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 52,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            height: 120,
            width: 120,
            backgroundColor: "#fff",
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/product_img2.png")}
          />
        </View>
        <View
          style={{
            marginLeft: 20,
            height: 120,
            width: 100,
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "red"
          }}
        >
          <View>
            <AppText
              style={{
                fontWeight: "500",
                fontSize: 16,
                color: "#03045E",
              }}
            >
              {product.name}
            </AppText>
            <AppText
              style={{
                fontWeight: "800",
                fontSize: 20,
                color: "#0364FF",
                marginTop: 7,
              }}
            >
              ₦{numberWithCommas(product.totalCost)}
            </AppText>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(reduceQuantity(product))}
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Ionicons name="remove-outline" style={{ fontSize: 20 }} />
            </TouchableOpacity>
            <AppText
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#666666",
              }}
            >
              {product.quantity}
            </AppText>

            <TouchableOpacity
              onPress={() => dispatch(addToCart(product))}
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Ionicons name="add-outline" style={{ fontSize: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(removeFromCart(product));
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 1000);
        }}
        style={{
          width: 40,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Ionicons
          name="trash-outline"
          style={{ fontSize: 22, color: "#666666" }}
        />
      </TouchableOpacity>
    </View>
  );
}
