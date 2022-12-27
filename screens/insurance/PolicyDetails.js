import {
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import Bar from "../../components/seed1/Bar";
import AppText from "../../components/seed1/AppText";
import UpperNavigation from "../../components/seed1/UpperNavigation";

export default function PolicyDetails() {
  const [openedNote, setOpenedNote] = useState(-1);
  const { width: windowWidth } = Dimensions.get("window");

  const openNote = (noteId) => {
    if (noteId == openedNote) {
      setOpenedNote(-1);
    } else {
      setOpenedNote(noteId);
    }
  };
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation title="Policy Details" back />

      <ScrollView style={{ flex: 1 }}>
        {[
          "Sponsor Details",
          "Policy Details",
          "Principal Details",
          "Dependent Details",
          "Provider List",
        ].map((item, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: 64,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AppText
                style={{ color: "#03045E", fontSize: 14, fontWeight: "400" }}
              >
                {item}
              </AppText>
              <TouchableOpacity onPress={() => openNote(i)}>
                {i == openedNote ? (
                  <Ionicons
                    name="chevron-forward-outline"
                    style={{
                      fontSize: 26,
                    }}
                  />
                ) : (
                  <Ionicons
                    name="chevron-down-outline"
                    style={{
                      fontSize: 26,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
            {i == openedNote ? (
              <View
                style={{
                  flex: 1
                }}
              >
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Policy No
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    13322BA
                  </AppText>
                </View>
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Phone
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Teejay Tabor
                  </AppText>
                </View>
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Start Date:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Lagos State Clinic
                  </AppText>
                </View>
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    End Date
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    123456
                  </AppText>
                </View>
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Policy Tag:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    23/06/2022
                  </AppText>
                </View>
                <View style={{ marginTop: 24 }}>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Status:
                  </AppText>
                  <AppText
                    style={{
                      color: "#00B67A",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Active
                  </AppText>
                </View>
       
              </View>
            ) : (
              <></>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
