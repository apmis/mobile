import { View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";
import client from "../../feathers";
import dateHandler from "../../utils/functions/date";

export default function AuthorizationDetails() {
  const { width: windowWidth } = Dimensions.get("window");
  const auth = client.service("preauth");
  const [data, setData] = useState({
    preauthCode: "",
    preauthid: "",
    beneficiary: {
      firstname: "",
      middlename: "",
      lastname: "",
    },
    provider: {
      facilityName: "",
    },
    clinical_details: {
      admission_date: "",
      discharged_date: "",
      preauthtype: "",
    },
    policy: {
      planType: "",
    },
  });

  const fetch = async () => {
    try {
      const authRes = await auth.find({
        query: {
          "beneficiary._id": "63df51a83c894f0016f4366e",
          $limit: 1,
          // description: { $ne: "" },

          $sort: {
            createdAt: -1,
          },
          $select: [
            "preauthCode",
            "preauthid",
            "beneficiary.firstname",
            "beneficiary.middlename",
            "beneficiary.lastname",
            "provider.facilityName",
            "clinical_details.admission_date",
            "clinical_details.discharged_date",
            "clinical_details.preauthtype",
            "policy.planType",
            "policy.providers",
          ],
        },
      });

      // console.log(authRes.data[0]);
      console.log(authRes.data[0].policy.providers);
      setData(authRes.data[0]);
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
      <UpperNavigation back title="Pre-Authorization Details" />

      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Pre--Authorization Code
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {data.preauthid}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Fullname
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {`${data.beneficiary.firstname} ${data.beneficiary.lastname}`}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Hospital Name:
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {data.provider.facilityName}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Pre-auth ID
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {data.preauthid}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Date of Admission:
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {dateHandler(data.clinical_details.admission_date)}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Date of Discharge:
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {dateHandler(data.clinical_details.discharged_date)}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Health Plan:
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {data.policy.planType}
          </AppText>
        </View>
        <View style={{ marginTop: 24 }}>
          <AppText
            style={{ color: "#0E214D", fontSize: 16, fontWeight: "700" }}
          >
            Fee for Service:
          </AppText>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            {data.clinical_details.preauthtype === "Fee for Service"
              ? "Applicable"
              : "None"}
          </AppText>
        </View>
      </View>
    </View>
  );
}
