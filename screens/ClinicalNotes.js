import {
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Button from "../components/seed1/Button";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export default function ClinicalNotes() {
  const [openedNote, setOpenedNote] = useState(-1);

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
          Clinical Notes
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {Array(8)
          .fill("")
          .map((item, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "#fff",
                // height: 64,
                marginHorizontal: 34,
                // flexDirection: "row",
                // alignItems: "center",
                // justifyContent: "space-between",
                paddingHorizontal: 18,
                marginTop: 16,
                borderRadius: 16,
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
                <Text
                  style={{ color: "#03045E", fontSize: 14, fontWeight: "400" }}
                >
                  Blood Cancer Treatment
                </Text>
                <TouchableOpacity onPress={() => openNote(i)}>
                  {i == openedNote ? (
                    <Ionicons
                      name="chevron-down-outline"
                      style={{
                        //   color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                        fontSize: 26,
                      }}
                    />
                  ) : (
                    <Ionicons
                      name="chevron-forward-outline"
                      style={{
                        //   color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                        fontSize: 26,
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {i == openedNote ? (
                <View style={{ paddingBottom: 80 }}>
                  <Text
                    style={{
                      color: "#0364FF",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    22, November, 2022
                  </Text>
                  <Text
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                      lineHeight: 22,
                    }}
                  >
                    Both Ulna and Radius bones fractured, significant
                    displacement diagnosed.
                  </Text>
                  <Text
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Doctor On Duty
                  </Text>
                  <Text
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                    }}
                  >
                    Brooklyn Simmons
                  </Text>
                  <Text
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Diagnosis
                  </Text>
                  <Text
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                      lineHeight: 22,
                    }}
                  >
                    Liver tests show abnormal liver enzyme levels,which may be a
                    sign of liver damage. I suspect cirrhosis you have:
                    Increased levels of the liver enzymes alanine transaminase
                    (ALT), aspartate transaminase (AST), and alkaline
                    phosphatase (ALP). Increased levels of bilirubin. Decreased
                    levels of blood proteins.
                  </Text>
                  <Text
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Medications
                  </Text>
                  <Text
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                    }}
                  >
                    Diclofenac, 200 mg
                  </Text>
                  <Text
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      lineHeight: 22,
                      // marginTop: 8,
                    }}
                  >
                    3 capsules with meals daily
                  </Text>
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
