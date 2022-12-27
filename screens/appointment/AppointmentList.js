import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import AppointmentFilter from "../../components/seed1/AppointmentFilter";
import AppointmentPreview from "../../components/seed1/AppointmentPreview";
import AppText from "../../components/seed1/AppText";

export default function AppointmentList({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [filterModal, setFilterModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);

  const goHome = () => {
    navigation.navigate("Onboard");
  };

  return (
    <View style={{ backgroundColor: "#f3f3f3", flex: 1, position: "relative", paddingBottom: 30 }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Appointments"
        rightIcon
        rightIconName="options-outline"
        rightIconFunc={() => setFilterModal(true)}
      />

      <ScrollView
        style={{
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {["Today", "Tuesday June 16"].map((item, i) => (
          <View key={i} style={{ marginTop: 30 }}>
            <AppText style={{ fontWeight: "600", fontSize: 16, color: "#0E214D" }}>
              {item}
            </AppText>

            {[
              {
                name: "Ante-Natal",
                icon: require("../../assets/images/circle1.png"),
              },
              {
                name: "X-Ray Visit",
                icon: require("../../assets/images/circle2.png"),
              },
              {
                name: "Monthly Checkup",
                icon: require("../../assets/images/circle3.png"),
              },
            ].map((item, index) => (
              <TouchableOpacity key={index} onPress={() => setPreviewModal(true)}>
                <View key={index} style={{ marginTop: 15 }}>
                  <AppText
                    style={{
                      fontWeight: "600",
                      fontSize: 14,
                      color: "#6D7589",
                    }}
                  >
                    8:40 a.m
                  </AppText>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      borderRadius: 16,
                      backgroundColor: "#fff",
                      paddingLeft: 17,
                      height: 95,
                      marginTop: 8,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "yellow",
                      }}
                    >
                      <View style={{ height: 40, width: 40, marginRight: 16 }}>
                        <Image
                          style={{ height: "100%", width: "100%" }}
                          source={item.icon}
                        />
                      </View>
                      <View>
                        <AppText
                          style={{
                            fontWeight: "700",
                            fontSize: 16,
                            color: "#0E214D",
                          }}
                        >
                          {item.name}
                        </AppText>
                        <AppText
                          style={{
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#6D7589",
                          }}
                        >
                          Pregnancy Visit
                        </AppText>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <AppointmentFilter show={filterModal} setFilterModal={setFilterModal} />
      <AppointmentPreview
        show={previewModal}
        setPreviewModal={setPreviewModal}
      />
    </View>
  );
}
