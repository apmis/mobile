import { View, Dimensions, Image } from "react-native";
import React from "react";
import Bar from "../../components/seed1/Bar";
import Button from "../../components/seed1/Button";
import AppText from "../../components/seed1/AppText";

export default function ImagingRequestMade({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />

      <View
        style={{
          flex: 1,
          // backgroundColor: "yellow",
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
              width: windowWidth - 40,
              marginHorizontal: 20,
            }}
          >
            Imaging Examination Request Successful
          </AppText>
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 63,
            }}
          >
            <Button
              onPressProp={() => navigation.navigate("Dashboard")}
              bgColor={"#0364FF"}
              btnRadius={4}
              title={"Back to Home"}
              txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
