import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Button from "../../components/seed1/Button";
import AppText from "../../components/seed1/AppText";

export default function HealthInsurance({navigation}) {
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Get Your Health Insured Today" />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity>
            <Image source={require("../../assets/images/health_circle.png")} />
          </TouchableOpacity>
          <AppText style={{ fontSize: 16, fontWeight: "400", marginVertical: 40 }}>
            You do not have any insurance plan yet
          </AppText>
          <Button
            onPressProp={()=>navigation.navigate("GetInsured")}
            bgColor="#0364FF"
            txtStyle={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
            title="Get Insurance  Now"
            btnH={50}
          />
        </View>
      </View>
    </View>
  );
}
