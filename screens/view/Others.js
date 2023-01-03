import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";

export default function Others({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");

  const views = [
    {
      title: "Medical Records",
      img: require("../../assets/images/medical_record.png"),
      link: "MedicalRecords",
    },
    {
      title: "Clinical Notes",
      img: require("../../assets/images/clinical_notes.png"),
      link: "ClinicalNotes",
    },
    {
      title: "Presciptions",
      img: require("../../assets/images/prescriptions.png"),
      link: "Prescriptions",
    },
    {
      title: "Health Insurance",
      img: require("../../assets/images/health_insurance.png"),
      link: "GetInsured",
    },
    {
      title: "Appointments",
      img: require("../../assets/images/appointment.png"),
      link: "BookAppointment",
    },
    {
      title: "Referral",
      img: require("../../assets/images/referral.png"),
      link: "ReferPerson",
    },
    {
      title: "Lab Request",
      img: require("../../assets/images/referral.png"),
      link: "LabTestRequest",
    },
    {
      title: "Imaging Request",
      img: require("../../assets/images/referral.png"),
      link: "ImagingRequest",
    },
    {
      title: "Blood Request",
      img: require("../../assets/images/referral.png"),
      link: "BloodRequestList",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar />
      <UpperNavigation back title="View" />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          {views.map((item, i) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.link)}
              key={i}
              style={{
                height: 196,
                backgroundColor: "#fff",
                width: windowWidth / 2.3,
                borderRadius: 16,
                marginVertical: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item.img} />
              <AppText
                style={{
                  color: "#0E214D",
                  fontSize: 16,
                  fontWeight: "400",
                  marginTop: 20,
                }}
              >
                {item.title}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
