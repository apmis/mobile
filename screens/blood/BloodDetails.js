import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/seed1/AppText";
import UpperNavigation from "../../components/seed1/UpperNavigation";

export default function BloodDetails({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation title="Details" back />
      <ScrollView showsVerticalScrollIndicator={false}>
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
                Procedure
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
                Clinical Indication
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
                Technique
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
                Comparison
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
                Finding
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
                Impression
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
                Recommendation
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
       
        </View>
      </ScrollView>
    </View>
  );
}
