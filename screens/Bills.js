import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Bar from "../components/seed1/Bar";
import UpperNavigation from "../components/seed1/UpperNavigation";
import BillPayModal from "../components/seed1/BillPayModal";

export default function Bills() {
  const windowWidth = Dimensions.get("window").width;
  const [billModal, setBillModal] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Bills" />
      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 35,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 2, 3, 5].map((item, i) => (
            <>
              <Pressable key={i} onPress={() => setBillModal(true)}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    height: 71,
                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/images/pending_arrow.png")}
                    />
                    <View style={{ marginLeft: 16 }}>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 16,
                          color: "#03045E",
                        }}
                      >
                        Drugs
                      </Text>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 12,
                          color: "#6D7589",
                        }}
                      >
                        Pending, 11:25P.M
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#001B6A",
                    }}
                  >
                    ₦186,000.00
                  </Text>
                </View>
              </Pressable>
              <View style={{ borderWidth: 1, borderColor: "#ccc" }}></View>
            </>
          ))}

          {[1, 2, 3, 4, 5].map((item, i) => (
            <View key={i}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: 71,
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/completed_arrow.png")}
                  />
                  <View style={{ marginLeft: 16 }}>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 16,
                        color: "#03045E",
                      }}
                    >
                      Drugs
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        color: "#6D7589",
                      }}
                    >
                      Completed, 11:25P.M
                    </Text>
                  </View>
                </View>
                <Text
                  style={{ fontWeight: "600", fontSize: 16, color: "#001B6A" }}
                >
                  ₦186,000.00
                </Text>
              </View>
              <View style={{ borderWidth: 1, borderColor: "#ccc" }}></View>
            </View>
          ))}
        </ScrollView>
      </View>

      <BillPayModal show={billModal} setBillModal={setBillModal} />
    </View>
  );
}
