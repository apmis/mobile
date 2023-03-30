import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/seed1/AppText";
import UpperNavigation from "../../components/seed1/UpperNavigation";

export default function PrescriptionData({navigation}) {
  const {width: windowWidth} = Dimensions.get("window");

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation  title="Prescriptions" back />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 14,
          width: windowWidth - 40,
          marginHorizontal: 20,
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
            <AppText
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Drug Name
            </AppText>
            <AppText
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              Tabs Paracetamol 1g TDS x 3/7
            </AppText>
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
            <AppText
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Strength
            </AppText>
            <AppText
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              1-2 Tablets
            </AppText>
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
            <AppText
              style={{
                color: "#0E214D",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Duration
            </AppText>
            <AppText
              style={{
                color: "#6D7589",
                fontWeight: "400",
                fontSize: 16,
                width: 160,
              }}
            >
              5 Days
            </AppText>
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
          <AppText
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
          </AppText>
          <AppText
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
          </AppText>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E5E5",
              width: "90%",
              marginTop: 9,
            }}
          ></View>
          <AppText
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
          </AppText>
        </View>
      </View>
    </View>
  );
}
