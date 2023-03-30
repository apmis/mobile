import {
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";
import Bar from "../../components/seed1/Bar";
import AppText from "../../components/seed1/AppText";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import client from "../../feathers";

export default function PolicyDetails() {
  const [openedNote, setOpenedNote] = useState("Policy Details");
  const { width: windowWidth } = Dimensions.get("window");
  const [data, setData] = useState({
    active: "",
    principal: {
      policyNo: "",
      firstname: "",
      lastname: "",
      gender: "",
      phone: "",
    },
  });
  const policy = client.service("policy");

  const openNote = (noteId) => {
    if (noteId == openedNote) {
      setOpenedNote(-1);
    } else {
      setOpenedNote(noteId);
    }
  };
  const fetch = async () => {
    try {
      const policyRes = await policy.find({
        query: {
          "principal._id": "63ed2431d041780014e92d03",
          // "participantInfo.clientId": "63e2311467307d001434e3b8",
          // createdBy: "61b3610e316cc8001649a9fd",
          // clientId: { $nin: ["63e2311467307d001434e3b8"] },
          $limit: 1,
          $sort: {
            createdAt: -1,
          },
          $select: [
            "active",
            "principal.policyNo",
            "principal.firstname",
            "principal.lastname",
            "principal.gender",
            "principal.phone",
          ],
        },
      });

      console.log("Policy: ", policyRes.data[0]);
      setData(policyRes.data[0]);
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
      <UpperNavigation title="Policy Details" back />

      <ScrollView style={{ flex: 1 }}>
        <>
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20,
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
                style={{ color: "#03045E", fontSize: 18, fontWeight: "600" }}
              >
                Policy Details
              </AppText>
              <TouchableOpacity onPress={() => openNote("Policy Details")}>
                {openedNote == "Policy Details" ? (
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
            {openedNote == "Policy Details" ? (
              <View
                style={{
                  flex: 1,
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
                    Policy No:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    {data.principal.policyNo}
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
                    Phone:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    {data.principal.phone}
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
                    09/12/2022
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
                    End Date:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    09/12/2022
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
                    5365
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
                      color: `${data.active === true ? "#00B67A" : "red"}`,
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    {data.active === true ? "Active" : "In-Active"}
                  </AppText>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20,
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
                style={{ color: "#03045E", fontSize: 18, fontWeight: "600" }}
              >
                Sponsor Details
              </AppText>
              <TouchableOpacity onPress={() => openNote("Sponsor Details")}>
                {openedNote == "Sponsor Details" ? (
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
            {openedNote == "Sponsor Details" ? (
              <View
                style={{
                  flex: 1,
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
                    Sponsor Name:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Leadway Assurance
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
                    Phone:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    0801234567890
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
                    Email:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    example@mail.com
                  </AppText>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20,
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
                style={{ color: "#03045E", fontSize: 18, fontWeight: "600" }}
              >
                Principal Details
              </AppText>
              <TouchableOpacity onPress={() => openNote("Principal Details")}>
                {openedNote == "Principal Details" ? (
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
            {openedNote == "Principal Details" ? (
              <View
                style={{
                  flex: 1,
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
                    Name:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Teejay Teko
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
                    Gender:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Female
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
                    Age:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    27
                  </AppText>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20,
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
                style={{ color: "#03045E", fontSize: 18, fontWeight: "600" }}
              >
                Dependent Details
              </AppText>
              <TouchableOpacity onPress={() => openNote("Dependent Details")}>
                {openedNote == "Dependent Details" ? (
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
            {openedNote == "Dependent Details" ? (
              <View
                style={{
                  flex: 1,
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
                    Name:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Teejay Teko
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
                    Gender:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Female
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
                    Age:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    27
                  </AppText>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              paddingHorizontal: 18,
              marginTop: 16,
              borderRadius: 16,
              paddingBottom: 20,
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
                style={{ color: "#03045E", fontSize: 18, fontWeight: "600" }}
              >
                Provider List
              </AppText>
              <TouchableOpacity onPress={() => openNote("Provider List")}>
                {openedNote == "Provider List" ? (
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
            {openedNote == "Provider List" ? (
              <View
                style={{
                  flex: 1,
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
                    Provider Name:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Hospital
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
                    Contact Person:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Teejay Teko
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
                    Phone:
                  </AppText>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    081234567890
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
                      color: "#ED0423",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 5,
                    }}
                  >
                    Expired
                  </AppText>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        </>
      </ScrollView>
    </View>
  );
}
