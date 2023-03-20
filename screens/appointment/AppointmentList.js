import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import AppointmentFilter from "../../components/seed1/AppointmentFilter";
import AppointmentPreview from "../../components/seed1/AppointmentPreview";
import AppText from "../../components/seed1/AppText";
import client from "../../feathers";
import timeHandler from "../../utils/functions/time";
import dateHandler from "../../utils/functions/date";

export default function AppointmentList({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [filterModal, setFilterModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [appointmentList, setAppointmentList] = useState([
    {
      _id: "",
      appointment_reason: "",
      appointment_status: "",
      client: {
        createdAt: "",
        updatedAt: "",
      },
    },
  ]);
  const appointments = client.service("appointments");
  const [selectedAppointment, setSlectedAppointment] = useState({
    _id: "",
    appointment_reason: "",
    appointment_status: "",
    client: {
      createdAt: "",
      updatedAt: "",
    },
  });
  const icon = require("../../assets/images/circle1.png");
  const fetch = async () => {
    try {
      const appointmentsRes = await appointments.find({
        query: {
          "client._id": "6414755eccfc1d00147cde7c",
          // documentname: "Prescription",
          // $limit: 40,
          $sort: {
            createdAt: -1,
          },
          $select: [
            "client.createdAt",
            "client.updatedAt",
            "location_name",
            "appointment_reason",
            "appointment_status",
            "practitioner_name",
            "practitioner_profession",
          ],
        },
      });
      console.log(appointmentsRes.data);
      setAppointmentList(appointmentsRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#f3f3f3",
        flex: 1,
        position: "relative",
        paddingBottom: 30,
      }}
    >
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
        {/* {["Today", "Tuesday June 16"].map((item, i) => (
          <View key={i} style={{ marginTop: 30 }}>
            <AppText
              style={{ fontWeight: "600", fontSize: 16, color: "#0E214D" }}
            >
              {item}
            </AppText> */}

        {appointmentList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSlectedAppointment(item);
              setPreviewModal(true);
            }}
          >
            <View key={index} style={{ marginTop: 15 }}>
              <AppText
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  color: "#6D7589",
                }}
              >
                {dateHandler(item.client.createdAt)}
              </AppText>
              {/* <AppText
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  color: "#6D7589",
                }}
              >
                {timeHandler(item.client.createdAt)}
              </AppText> */}
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
                      source={icon}
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
                      {item.appointment_reason}
                    </AppText>
                    <AppText
                      style={{
                        fontWeight: "600",
                        fontSize: 14,
                        color: "#6D7589",
                      }}
                    >
                      {item.appointment_status}
                    </AppText>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        {/* </View> */}
        {/* ))} */}
      </ScrollView>
      <AppointmentFilter show={filterModal} setFilterModal={setFilterModal} />
      <AppointmentPreview
        data={selectedAppointment}
        show={previewModal}
        setPreviewModal={setPreviewModal}
      />
    </View>
  );
}
