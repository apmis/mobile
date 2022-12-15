import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Bar from "../components/seed1/Bar";
import UpperNavigation from "../components/seed1/UpperNavigation";
import Button from "../components/seed1/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import CancelPlanModal from "../components/seed1/CancelPlanModal";

export default function GetInsured({ navigation }) {
  const [chosenTab, setChosenTab] = useState("Plans");
  const [isOpenCancelModal, setIsOpenCancelModal] = useState(true);
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Get Your Health Insured Today" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          backgroundColor: "#fff",
          height: 44,
          borderRadius: 4,
          paddingHorizontal: 5,
          marginTop: 40,
        }}
      >
        <Pressable
          style={{
            height: 34,
            backgroundColor: chosenTab == "Providers" ? "#DAE1F3" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // paddingHorizontal: 50,
            width: "50%",
            borderRadius: 4,
          }}
          onPress={() => setChosenTab("Providers")}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: chosenTab == "Providers" ? 14 : 12,
                color: chosenTab == "Providers" ? "#0E214D" : "#6D7589",
              }}
            >
              Providers
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            height: 34,
            backgroundColor: chosenTab == "Plans" ? "#DAE1F3" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // paddingHorizontal: 50,
            width: "50%",
            borderRadius: 4,
          }}
          onPress={() => setChosenTab("Plans")}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: chosenTab == "Plans" ? 14 : 12,
                color: chosenTab == "Plans" ? "#0E214D" : "#6D7589",
              }}
            >
              Active Plans
            </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView style={{ flex: 1, marginHorizontal: 10 }}>
        {chosenTab == "Providers" ? (
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "red",
              flexWrap: "wrap",
              marginTop: 39,
            }}
          >
            {[
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
              "Oceans Health...",
            ].map((item, i) => (
              <Pressable
                key={i}
                onPress={() => navigation.navigate("ProviderDetails")}
              >
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                >
                  <View style={{ height: 64, width: 64 }}>
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={require("../assets/images/ins_sample.png")}
                    />
                  </View>
                  <Text
                    style={{ marginTop: 8, fontSize: 14, fontWeight: "400" }}
                  >
                    {item}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                width: 350,
                height: 484,
                borderRadius: 5,
                backgroundColor: "#fff",
                marginHorizontal: 20,
                marginTop: 30,
                paddingTop: 16,
                paddingBottom: 26,
                paddingHorizontal: 15,
                position: "relative",
              }}
            >
              <Text
                style={{ color: "#000C23", fontSize: 20, fontWeight: "800" }}
              >
                SILVER PLAN
              </Text>
              <Text
                style={{
                  color: "#000C23",
                  fontSize: 20,
                  fontWeight: "600",
                  marginTop: 10,
                }}
              >
                ₦40.50
                <Text
                  style={{ color: "#556D9E", fontSize: 12, fontWeight: "400" }}
                >
                  {" "}
                  Monthly
                </Text>
              </Text>

              {[1, 2, 3, 4].map((item, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    //   backgroundColor: "red",
                    justifyContent: "center",
                    marginTop: 22,
                    width: 270,
                  }}
                >
                  <Ionicons
                    name="checkmark-circle"
                    style={{
                      fontSize: 26,
                      color: "#66C27C",
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      color: "#556D9E",
                      fontSize: 14,
                      fontWeight: "400",
                      textAlign: "justify",
                      width: 240,
                      // backgroundColor: "white",
                    }}
                  >
                    Combined medical cover of 1.2 million per year
                  </Text>
                </View>
              ))}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 100,
                  left: 20,
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "400", color: "#3679F8" }}
                >
                  Expires: 30th Sept 2023
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  width: 300,
                  left: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onPressProp={() => setIsOpenCancelModal(true)}
                  borderW={1}
                  borderColor={"#3679F8"}
                  title="Cancel Plan"
                  bgColor="#fff"
                  btnW={320}
                  txtStyle={{
                    color: "#3679F8",
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      <CancelPlanModal
        setIsOpenCancelModal={setIsOpenCancelModal}
        show={isOpenCancelModal}
      />
    </View>
  );
}
