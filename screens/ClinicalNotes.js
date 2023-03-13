import {
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../components/seed1/Button";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";
import AppText from "../components/seed1/AppText";
import UpperNavigation from "../components/seed1/UpperNavigation";
import ShareNote from "../components/seed1/ShareNote";
import client from "../feathers";

export default function ClinicalNotes() {
  const [openedNote, setOpenedNote] = useState(-1);
  const { width: windowWidth } = Dimensions.get("window");
  const [share, setShare] = useState(false);
  const clinicalNotes = client.service("clinicaldocument");

  const openNote = (noteId) => {
    if (noteId == openedNote) {
      setOpenedNote(-1);
    } else {
      setOpenedNote(noteId);
    }
  };

  const fetch = async () => {
    try {
      const clinicalNotesRes = await clinicalNotes.find({
        query: {
          client: "61dc1aefad488300168cb5fe",
          $limit: 1,
          // description: { $ne: "" },
          $sort: {
            createdAt: -1,
          },
          // $select: ["provider.facilityName", "provider.facilitylogo"],
        },
      });
      // console.log(authRes.data[0]);
      console.log(clinicalNotesRes.data[0].documentdetail);
      // setData(clinicalNotesRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Clinical Notes"
        rightIcon
        rightIconName="arrow-redo"
        rightIconSize={22}
        rightIconFunc={() => setShare(true)}
      />

      <ScrollView style={{ flex: 1 }}>
        {Array(8)
          .fill("")
          .map((item, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "#fff",
                width: windowWidth - 40,
                marginHorizontal: 20,
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
                <AppText
                  style={{ color: "#03045E", fontSize: 14, fontWeight: "400" }}
                >
                  Blood Cancer Treatment
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
                <View style={{ paddingBottom: 80 }}>
                  <AppText
                    style={{
                      color: "#0364FF",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    22, November, 2022
                  </AppText>
                  <AppText
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
                  </AppText>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Doctor On Duty
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                    }}
                  >
                    Brooklyn Simmons
                  </AppText>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Diagnosis
                  </AppText>
                  <AppText
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
                  </AppText>
                  <AppText
                    style={{
                      color: "#0E214D",
                      fontSize: 14,
                      fontWeight: "500",
                      marginTop: 22,
                    }}
                  >
                    Medications
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 8,
                    }}
                  >
                    Diclofenac, 200 mg
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      lineHeight: 22,
                      // marginTop: 8,
                    }}
                  >
                    3 capsules with meals daily
                  </AppText>
                </View>
              ) : (
                <></>
              )}
            </View>
          ))}
      </ScrollView>

      <ShareNote setShare={setShare} show={share} />
    </View>
  );
}
