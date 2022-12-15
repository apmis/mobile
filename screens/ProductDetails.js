import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Bar from "../components/seed1/Bar";
import UpperNavigation from "../components/seed1/UpperNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/seed1/Button";
import ProductReview from "../components/seed1/ProductReview";

export default function ProductDetails() {
  const windowWidth = Dimensions.get("window").width;
  const [prodReview, setProdReview] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Kids Relief Syrup"
        rightIcon
        rightIconName="cart"
      />
      <View
        style={{
          height: 323,
          backgroundColor: "#fff",
          width: 351,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 24,
        }}
      ></View>
      <View
        style={{
          width: windowWidth - 40,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 19,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 22,
            color: "rgba(7, 12, 24, 0.87)",
          }}
        >
          Kids Relief Syrup
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
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
          </Pressable>
          <Text style={{ fontWeight: "400", fontSize: 12, color: "#666666" }}>
            1
          </Text>
          <Pressable
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
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Pressable>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  color: "#03045E",
                  textDecorationLine: "underline",
                }}
              >
                500 reviews
              </Text>
            </Pressable>
            {[1, 2, 3].map((item, i) => (
              <View key={i} style={{ marginTop: 12, marginBottom: 25 }}>
                <Text
                  style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "#6D7589",
                    lineHeight: 19,
                    marginTop: 8,
                  }}
                >
                  Dabor Broncoid contains 76 grams of metholyne, Syrup, liquid.
                  It helps cure cough for adult and children. Should be taken
                  after eating only once daily. Avoid overdose and please take 2
                  spoons daily till result.
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button btnW="48%" title="Add to Cart" txtStyle={{ color: "#fff" }} />
          <Button
            btnW="48%"
            title="Buy Now"
            bgColor="#0E214D"
            txtStyle={{ color: "#fff" }}
          />
        </View>
      </View>

      <ProductReview show={prodReview} setProdReview={setProdReview} />
    </View>
  );
}
