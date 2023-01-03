import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";
import Button from "../../components/seed1/Button";


export default function DrugsTaken() {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation title="Prescriptions" />
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 100,
            width: windowWidth - 40,
            marginHorizontal: 20,
            padding: 0,
          }}
        >
          <Image source={require("../../assets/images/checked.png")} />
          <AppText
            style={{
              color: "#03045E",
              fontSize: 16,
              fontWeight: "500",
              marginTop: 11,
              marginBottom: 10,
            }}
          >
            Drugs Taken
          </AppText>
        </View>
        <AppText
          style={{
            color: "#6D7589",
            fontSize: 14,
            fontWeight: "400",
            marginTop: 11,
            textAlign: "center",
            width: windowWidth - 40,
            marginHorizontal: 20,
            // backgroundColor: "teal"
          }}
        >
          Welldone. You are making progress and keeping healthy
        </AppText>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            marginTop: 140,
          }}
        >
          <Button
            bgColor={"#0364FF"}
            btnRadius={4}
            btnH={55}
            txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
            title={"Back to Home"}
          />
        </View>
      </View>
    </View>
  );
}
