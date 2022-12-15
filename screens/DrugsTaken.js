import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Bar from "../components/seed1/Bar";
import Button from "../components/seed1/Button";
import UpperNavigation from "../components/seed1/UpperNavigation";

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
            // justifyContent: "center",
            marginTop: 100,
            // backgroundColor: "red",
            width: windowWidth - 40,
            marginHorizontal: 20,
            padding: 0,
          }}
        >
          <Image source={require("../assets/images/checked.png")} />
          <Text
            style={{
              color: "#03045E",
              fontSize: 16,
              fontWeight: "500",
              marginTop: 11,
              marginBottom: 10,
            }}
          >
            Drugs Taken
          </Text>
        </View>
        <Text
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
        </Text>
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
            title={"Back to Home"}
            txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
          />
        </View>
      </View>
    </View>
  );
}
