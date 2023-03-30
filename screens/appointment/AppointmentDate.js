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
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/seed1/AppText";

export default function AppointmentDate({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");
  const [selectedDay, setSelectedDay] = useState("14");
  const [selectedTime, setSelectedTime] = useState("09:00 AM");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
      }}
    >
      <Bar hideBar={false} />
      <UpperNavigation back title="Book Appointment" />

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
        <AppText
          style={{
            color: "#222B45",
            marginRight: 21,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          July, 2020
        </AppText>
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
          {[
            { date: 13, day: "MON" },
            { date: 14, day: "TUE" },
            { date: 15, day: "WED" },
            { date: 16, day: "THU" },
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedDay(item.date)}
              style={{
                height: 100,
                width: 90,
                backgroundColor:
                  item.date == selectedDay ? "#0364ff" : "#f3f3f3",
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "rgba(107, 119, 154, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 24,
                  color: item.date == selectedDay ? "#fff" : "#6D7589",
                }}
              >
                {item.date}
              </AppText>
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  color: item.date == selectedDay ? "#fff" : "#6D7589",
                  marginTop: 9,
                }}
              >
                {item.day}
              </AppText>
            </TouchableOpacity>
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
          <AppText
            style={{
              fontWeight: "600",
              fontSize: 16,
              color: "#222B45",
              marginBottom: 20,
            }}
          >
            Available Time
          </AppText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {["08:00 AM", "09:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"].map(
                (item, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setSelectedTime(item)}
                    style={{
                      width: 100,
                      backgroundColor:
                        item == selectedTime ? "#0364FF" : "#f3f3f3",
                      borderRadius: 10,
                      height: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 5,
                      marginHorizontal: 5,
                    }}
                  >
                    <AppText
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        color: item == selectedTime ? "#fff" : "#6D7589",
                      }}
                    >
                      {item}
                    </AppText>
                  </TouchableOpacity>
                )
              )}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            marginTop: 25,
          }}
        >
          <AppText
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#000",
              marginBottom: 8,
            }}
          >
            Syptoms
          </AppText>
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
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Button
            onPressProp={() => navigation.navigate("AppointmentPay")}
            title="Proceed"
            txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
