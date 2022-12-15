import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PrescriptionsData() {
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          position: "relative",
          marginBottom: 34,
        }}
      >
        <Pressable style={{ position: "absolute", left: 34 }}>
          <Ionicons
            name="arrow-back-outline"
            style={{
              //   color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
              fontSize: 26,
            }}
          />
        </Pressable>
        <Text
          style={{
            color: "#0E214D",
            fontWeight: "600",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Prescriptions
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 14,
          marginHorizontal: 34,
          marginBottom: 38,
          marginTop: 59,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor: "red",
              height: 70,
            }}
          >
            <Text
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Drug Name
            </Text>
            <Text
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              Tabs Paracetamol 1g TDS x 3/7
            </Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: "#E5E5E5", marginTop: 10 }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
              height: 70,
            }}
          >
            <Text
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Strength
            </Text>
            <Text
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              1-2 Tablets
            </Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: "#E5E5E5", marginTop: 10 }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
              height: 70,
            }}
          >
            <Text
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Duration
            </Text>
            <Text
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              5 Days
            </Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: "#E5E5E5", marginTop: 10 }}
          ></View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#6D7589",
              fontWeight: "400",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 19,
              marginHorizontal: 18,
            }}
          >
            Take 1-2 tablets every 4-6 hours as required. Do not take more than
            8 tablets in 24 hours.
          </Text>
          <Text
            style={{
              color: "#0E214D",
              fontWeight: "600",
              fontSize: 16,
              textAlign: "center",
              lineHeight: 19,
              marginTop: 32,
            }}
          >
            Dr. Aniebiet Ubaha
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E5E5",
              width: "90%",
              marginTop: 9,
            }}
          ></View>
          <Text
            style={{
              color: "#6D7589",
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
              lineHeight: 19,
              marginTop: 10,
              marginBottom: 28,
            }}
          >
            Doctor
          </Text>
        </View>
      </View>
    </View>
  );
}
