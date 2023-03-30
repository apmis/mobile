import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";

export default function LabResult({ navigation }) {

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1, position: "relative" }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Lab Test Results" />

      <AppText
        style={{
          color: "#0E214D",
          fontSize: 16,
          fontWeight: "600",
          marginLeft: 32,
          marginBottom: 16,
          marginTop: 25,
        }}
      >
        Tuesday June 16
      </AppText>
      <ScrollView style={{ flex: 1 }}>
        {[1, 2, 3, 8].map((item, i) => (
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
                <AppText
                  style={{
                    color: "#0E214D",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Random Blood Glucose
                </AppText>
                <AppText
                  style={{
                    color: "#6D7589",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  ₦800
                </AppText>
              </View>
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../../assets/images/lab.png")}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(221, 221, 221, 0.8)",
                marginTop: 21,
              }}
            ></View>
            <AppText
              style={{
                color: "#FCB222",
                fontSize: 14,
                fontWeight: "600",
                marginTop: 19,
                marginBottom: 10,
              }}
            >
              Pending
            </AppText>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={()=>navigation.navigate("LabTestRequest")}>
        <Ionicons
          name="add-circle"
          style={{
            fontSize: 72,
            position: "absolute",
            bottom: 30,
            right: 20,
            color: "#0364ff",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
