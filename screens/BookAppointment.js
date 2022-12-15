import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../components/seed1/Button";
import UpperNavigation from "../components/seed1/UpperNavigation";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BookAppointment({navigation}) {
  const windowWidth = Dimensions.get("window").width;
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
              source={require("../assets/images/DocPic.png")}
            />
          </View>
          <Text
            style={{
              color: "#0E214D",
              fontWeight: "600",
              fontSize: 16,
              marginTop: 16,
            }}
          >
            Dr. Bellamy Nduka
          </Text>
          <Text
            style={{
              color: "#6B779A",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Viralogist
          </Text>
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
          //   paddingTop: 23
        }}
      >
        {/* {[1, 2, "tola"].map((item, i) => ( */}
        {/* <> */}
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
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}>
            1000+
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}>
            Patients
          </Text>
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
            name="person-outline"
            style={{
              color: "#0E214D",
              fontSize: 24,
            }}
          />
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}>
            1000+
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}>
            Patients
          </Text>
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
            name="person-outline"
            style={{
              color: "#0E214D",
              fontSize: 24,
            }}
          />
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#03045E" }}>
            1000+
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#6B779A" }}>
            Patients
          </Text>
        </View>

        {/* </> */}
        {/* ))} */}
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgb(243,243,243)" }}>
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
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: true ? "#03045E" : "#6D7589",
              }}
            >
              About
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: false ? "#03045E" : "#6D7589",
              }}
            >
              Location
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: false ? "#03045E" : "#6D7589",
              }}
            >
              Availablity
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: false ? "#03045E" : "#6D7589",
              }}
            >
              Reviews
            </Text>
          </View>

          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 29,
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}>
              Biography
            </Text>
            <Text
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
            </Text>
          </View>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 24,
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}>
              Availability
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: "#6D7589",
                marginTop: 10,
              }}
            >
              Mon-Sat (8:00AM-9:0P.M)
            </Text>
          </View>

          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 29,
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}>
              Reviews
            </Text>
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
                      source={require("../assets/images/profile.png")}
                    />
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <Text>Natasha</Text>
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
                <Text style={{color: "#6D7589", fontSize: 14, fontWeight: "400"}}>4 weeks ago</Text>
              </View>
              <View>
                <Text
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
                </Text>
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
              bgColor="#fff"
              btnRadius={4}
              btnH={44}
              title="See All Reviews"
              txtStyle={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
            />
          </View>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 20,
              marginBottom: 40
            }}
          >
            <Button
              onPressProp={()=>navigation.navigate("AppointmentDate")}
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
