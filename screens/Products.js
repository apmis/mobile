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
import BillPayModal from "../components/seed1/BillPayModal";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Products() {
  const windowWidth = Dimensions.get("window").width;
  const [billModal, setBillModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Marketplace"
        rightIcon
        rightIconName="cart"
      />

      <View
        style={{
          backgroundColor: "#fff",
          height: 56,
          borderRadius: 16,
          width: windowWidth - 40,
          marginHorizontal: 20,
          position: "relative",
          marginTop: 43,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            backgroundColor: "#fafafa",
            borderColor: "#fff",
            borderRadius: 16,
            height: 56,
          }}
          placeholder="search"
        />
        <TouchableOpacity
          style={{
            width: 52,
            height: 44,
            backgroundColor: "#0E214D",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 5,
            top: 5,
          }}
        >
          <Ionicons
            name="options-outline"
            style={{ fontSize: 26, color: "#fff" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 23,
          marginBottom: 30
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {[
              require("../assets/images/product_img.png"),
              require("../assets/images/product_img2.png"),
              require("../assets/images/product_img3.png"),
              require("../assets/images/product_img.png"),
              require("../assets/images/product_img2.png"),
              require("../assets/images/product_img.png"),
            ].map((item, i) => (
              <View
                key={i}
                style={{
                  height: 272,
                  borderRadius: 15,
                  backgroundColor: "#fff",
                  width: windowWidth / 2.3,
                  marginVertical: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 152,
                    width: 121,
                    marginTop: 30,
                  }}
                >
                  <Image source={item} />
                </View>
                <View style={{ marginTop: 18 }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      color: "#070C18",
                    }}
                  >
                    Dabur Broncorid Syrup
                  </Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 14,
                      color: "rgba(7, 12, 24, 0.87)",
                      marginTop: 4,
                    }}
                  >
                    ₦49.50
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <BillPayModal show={billModal} setBillModal={setBillModal} />
    </View>
  );
}
