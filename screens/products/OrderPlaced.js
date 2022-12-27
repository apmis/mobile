import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";
import Button from "../../components/seed1/Button";


export default function OrderPlaced({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation title="Thank You!" />
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: windowWidth - 40,
              marginHorizontal: 20,
              padding: 0,
              paddingBottom: 38,
            }}
          >
            <Image source={require("../../assets/images/checked.png")} />
          </View>
          <AppText
            style={{
              color: "#6D7589",
              fontSize: 14,
              fontWeight: "400",
              marginTop: 11,
              textAlign: "center",
              width: windowWidth - 100,
              marginHorizontal: 50,
            }}
           
          >
            Your Order has been placed! You will recieve an email reciept
            shortly
          </AppText>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 115,
            }}
          >
            <Button
              onPressProp={() => navigation.navigate("Onboard")}
              bgColor={"#0364FF"}
              btnRadius={4}
              btnH={50}
              title={"Back to Home"}
              txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
