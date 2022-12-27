import { View, Dimensions } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";

export default function AuthorizationDetails() {
  const { width: windowWidth } = Dimensions.get("window");
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Pre-Authorization Details" />

      <View style={{ flex: 1, width: windowWidth - 40, marginHorizontal: 20, paddingTop: 20 }}>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Pre--Authorization Code</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>13322BA</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Fullname</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>Teejay Tabor</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Hospital Name:</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>Lagos State Clinic</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Pre-auth ID</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>123456</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Date of Admission:</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>23/06/2022</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Date of Discharge:</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>23/06/2022</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Health Plan:</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>Former sector plan</AppText>
        </View>
        <View style={{marginTop: 24}}>
          <AppText style={{color: "#0E214D", fontSize: 16, fontWeight: "700"}}>Fee for Service:</AppText>
          <AppText style={{color: "#6D7589", fontSize: 16, fontWeight: "400", marginTop: 5}}>Applicable</AppText>
        </View>
      </View>
    </View>
  );
}
