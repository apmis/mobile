import {
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/seed1/AppText";
import client from "../../feathers";

export default function BookAppointment({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");
  const [chosenTab, setChosenTab] = useState("About");
  const appointments = client.service("appointments");
  const [data, setData] = useState();

  const fetch = async () => {
    try {
      const appointmentsRes = await appointments.find({
        query: {
          clientId: "60bdf029beeed33c682ac75b",
          $limit: 4,
          // description: { $ne: "" },

          $sort: {
            createdAt: -1,
          },
          // $select: [
          //   "preauthCode",
          //   "preauthid",
          //   "beneficiary.firstname",
          //   "beneficiary.middlename",
          //   "beneficiary.lastname",
          //   "provider.facilityName",
          //   "clinical_details.admission_date",
          //   "clinical_details.discharged_date",
          //   "clinical_details.preauthtype",
          //   "policy.planType",
          //   "policy.providers",
          // ],
        },
      });

      // console.log(authRes.data[0]);
      console.log(appointmentsRes.data);
      // setData(medicalRecordRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={{ backgroundColor: "#Faf83F9", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back />

      <View
        style={{
          marginTop: 34,
          position: "relative",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: 153, height: 153, position: "relative" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/images/DocPic.png")}
            />
          </View>
          <AppText
            style={{
              color: "#0E214D",
              fontWeight: "600",
              fontSize: 16,
              marginTop: 16,
            }}
          >
            Dr. Bellamy Nduka
          </AppText>
          <AppText
            style={{
              color: "#6B779A",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Viralogist
          </AppText>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          width: windowWidth - 40,
          marginHorizontal: 20,
          borderRadius: 20,
          height: 107,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="person-outline"
            style={{
              color: "#0E214D",
              fontSize: 24,
            }}
          />
          <AppText
            style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}
          >
            1000+
          </AppText>
          <AppText
            style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}
          >
            Patients
          </AppText>
        </View>

        <View
          style={{ height: 90, borderWidth: 1, borderColor: "#D6DDE4" }}
        ></View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="location-outline"
            style={{
              color: "#0E214D",
              fontSize: 24,
            }}
          />
          <AppText
            style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}
          >
            1.5km
          </AppText>
          <AppText
            style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}
          >
            From You
          </AppText>
        </View>

        <View
          style={{ height: 90, borderWidth: 1, borderColor: "#D6DDE4" }}
        ></View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="star-outline"
            style={{
              color: "#0E214D",
              fontSize: 24,
            }}
          />
          <AppText
            style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}
          >
            4.5
          </AppText>
          <AppText
            style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}
          >
            Ratings
          </AppText>
        </View>
      </View>
      <View
        style={{
          width: windowWidth - 40,
          height: 22,
          marginHorizontal: 20,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        {["About", "Location", "Availability", "Reviews"].map((item, i) => (
          <TouchableOpacity key={i} onPress={() => setChosenTab(item)}>
            <AppText
              style={{
                fontWeight: "650",
                fontSize: 16,
                color: item == chosenTab ? "#03045E" : "#6D7589",
              }}
            >
              {item}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "rgba(221, 221, 221, 0.8)",
          marginTop: 8,
          marginHorizontal: 20,
        }}
      ></View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgb(243,243,243)" }}>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 29,
            }}
          >
            <AppText
              style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}
            >
              Biography
            </AppText>
            <AppText
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: "#6D7589",
                marginTop: 10,
              }}
            >
              Dr. Bruce specialist in peadiatric, and work in Royal Hospital
              consectetur adipiscing elit, sed do eiusmod tempor incidi
              utaliqua.
            </AppText>
          </View>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 24,
            }}
          >
            <AppText
              style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}
            >
              Availability
            </AppText>
            <AppText
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: "#6D7589",
                marginTop: 10,
              }}
            >
              Mon-Sat (8:00AM-9:0P.M)
            </AppText>
          </View>

          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 29,
            }}
          >
            <AppText
              style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}
            >
              Reviews
            </AppText>
          </View>

          {[1, 2, 3, 4].map((item, i) => (
            <View
              key={i}
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                      backgroundColor: "red",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require("../../assets/images/profile.png")}
                    />
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <AppText>Natasha</AppText>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      {[1, 2, 3, 4, 5].map((item, i) => (
                        <Ionicons
                          key={i}
                          name="star"
                          style={{
                            color: "#ffbd14",
                            fontSize: 18,
                          }}
                        />
                      ))}
                    </View>
                  </View>
                </View>
                <AppText
                  style={{ color: "#6D7589", fontSize: 14, fontWeight: "400" }}
                >
                  4 weeks ago
                </AppText>
              </View>
              <View>
                <AppText
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    color: "#6D7589",
                    marginTop: 8,
                    lineHeight: 22,
                  }}
                >
                  Dr. Bruce is an excellent family care practician who is very
                  thorough, excellent manner and cares for her patients as
                  though they were her own family member. I highly recommend her
                  as a physician.
                </AppText>
              </View>
            </View>
          ))}

          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
            }}
          >
            <Button
              bgColor="#f3f3f3"
              btnRadius={4}
              btnH={50}
              borderColor="#E6EAEE"
              borderW={1}
              title="See All Reviews"
              txtStyle={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
            />
          </View>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <Button
              onPressProp={() => navigation.navigate("AppointmentDate")}
              bgColor="#0364FF"
              btnRadius={4}
              btnH={44}
              title="Book Appointment"
              txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
