import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import UpperNavigation from "../components/seed1/UpperNavigation";

export default function Prescriptions() {
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation title="Prescriptions" back />
      <Text
        style={{
          color: "#0E214D",
          fontSize: 16,
          fontWeight: "600",
          marginLeft: 32,
          marginBottom: 16,
          marginTop: 25
          
        }}
      >
        Tuesday June 16
      </Text>
      <ScrollView style={{ flex: 1 }}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              height: 159,
              marginHorizontal: 34,
              paddingHorizontal: 17,
              paddingTop: 23,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: 27,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#0E214D",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Tabs Paracetamol 1g TDS x 3/7
                </Text>
                <Text
                  style={{
                    color: "#6D7589",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Capsule After Breakfast
                </Text>
              </View>
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/images/jar.png")}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(221, 221, 221, 0.8)",
                marginTop: 21,
              }}
            ></View>
            <Text
              style={{
                color: "#FCB222",
                fontSize: 14,
                fontWeight: "600",
                marginTop: 19,
                marginBottom: 10,
              }}
            >
              Pending
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
