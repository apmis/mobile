import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import Button from "../components/seed1/Button";
import UpperNavigation from "../components/seed1/UpperNavigation";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AppointmentDate({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
      }}
    >
      <Bar hideBar={false} />
      <UpperNavigation
        goBack={() => navigation.goBack()}
        back
        title="Book Appointment"
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 28,
          width: windowWidth - 40,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#222B45",
            marginRight: 21,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          July, 2020
        </Text>
        <Ionicons
          name="chevron-down"
          style={{
            color: "#000",
            fontSize: 24,
          }}
        />
      </View>

      <View
        style={{ height: 130, width: windowWidth - 40, marginHorizontal: 20 }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              height: 100,
              width: 90,
              backgroundColor: "#f3f3f3",
              borderRadius: 13,
              borderWidth: 1,
              borderColor: "rgba(107, 119, 154, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 24, color: "#6D7589" }}>
              13
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#6B779A",
                marginTop: 9,
              }}
            >
              MON
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: 90,
              backgroundColor: "#0364ff",
              borderRadius: 13,
              borderWidth: 1,
              borderColor: "rgba(107, 119, 154, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 24, color: "#fff" }}>
              14
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#fff",
                marginTop: 9,
              }}
            >
              TUE
            </Text>
          </View>
          {[15, 16, 17, 18].map((item, i) => (
            <View
              key={i}
              style={{
                height: 100,
                width: 90,

                backgroundColor: "#f3f3f3",
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "rgba(107, 119, 154, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text
                style={{ fontWeight: "400", fontSize: 24, color: "#6D7589" }}
              >
                {item}
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  color: "#6B779A",
                  marginTop: 9,
                }}
              >
                MON
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        style={{ width: windowWidth - 40, marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginTop: 32,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              color: "#222B45",
              marginBottom: 20,
            }}
          >
            Available Time
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 5, 5].map((item, i) => (
              <View
                key={i}
                style={{
                  width: windowWidth / 3.8,
                  backgroundColor: "#f3f3f3",
                  borderRadius: 10,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 5,
                  // marginRight: 12
                }}
              >
                <Text
                  style={{ fontWeight: "400", fontSize: 14, color: "#6D7589" }}
                >
                  09:00 AM
                </Text>
              </View>
            ))}

            <View
              style={{
                width: windowWidth / 3.8,
                backgroundColor: "#0364FF",
                borderRadius: 10,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 14, color: "#fff" }}>
                09:00 AM
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#000",
              marginBottom: 8,
            }}
          >
            Syptoms
          </Text>
          <TextInput
            style={{
              height: 200,
              borderWidth: 1,
              borderColor: "#eee",
              marginBottom: 15,
              padding: 10,
            }}
            placeholder="Enter  how you are feeling"
          />
          {/* <View
          style={{
            height: 238,
            borderWidth: 1,
            borderColor: "#eee",
            marginBottom: 40,
          }}
        ></View> */}
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Button
            onPressProp={() => navigation.navigate("AppointmentPayment")}
            bgColor="#0364FF"
            btnRadius={4}
            btnH={44}
            title="Proceed"
            txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
