import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import AppText from "../../components/seed1/AppText";

export default function ProviderDetails({ route }) {
  const [planBought, setPlanBought] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const { data } = route.params;

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      {!planBought ? (
        <>
          <UpperNavigation color="#03045E" back title={data.title} />
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 30,
            }}
          >
            <AppText
              style={{
                textAlign: "justify",
                lineHeight: 22,
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              {data.title} guarantees life insurance for everyone and has
              differnt plans that benefits you. You can choose to subscribe to
              any of the plans monthly, annually or quarterly.
            </AppText>
          </View>
          <ScrollView
            horizontal
            style={{ flex: 1, width: windowWidth - 40, marginHorizontal: 20 }}
          >
            <View
              style={{
                display: "flex",
                width: 300,
                height: 484,
                borderRadius: 5,
                backgroundColor: "#202244",
                marginTop: 30,
                paddingTop: 16,
                paddingBottom: 26,
                paddingHorizontal: 15,
                position: "relative",
              }}
            >
              <AppText
                style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}
              >
                GOLD PLAN
              </AppText>
              <AppText
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                  marginTop: 10,
                }}
              >
                ₦40.50
                <AppText
                  style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}
                >
                  {" "}
                  Monthly
                </AppText>
              </AppText>

              {[1, 2, 3, 4].map((item, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    //   backgroundColor: "red",
                    justifyContent: "center",
                    marginTop: 22,
                    width: 270,
                  }}
                >
                  <Ionicons
                    name="checkmark-circle"
                    style={{
                      fontSize: 26,
                      color: "white",
                      marginRight: 5,
                    }}
                  />
                  <AppText
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: "400",
                      textAlign: "justify",
                      width: 240,
                      // backgroundColor: "white",
                    }}
                  >
                    Combined medical cover of 1.2 million per year
                  </AppText>
                </View>
              ))}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 100,
                  left: 20,
                }}
              >
                <AppText
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  View Hospital
                </AppText>
                <Ionicons
                  name="chevron-down"
                  style={{
                    fontSize: 26,
                    color: "white",
                    marginRight: 5,
                  }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  width: 300,
                  alignItems: "center",
                }}
              >
                <Button
                  onPressProp={() => setPlanBought(true)}
                  title="Buy Plan"
                  bgColor="#fff"
                  btnW={270}
                  txtStyle={{
                    color: "#0E214D",
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                width: 300,
                height: 484,
                borderRadius: 5,
                backgroundColor: "#0364ff",
                marginHorizontal: 20,
                marginTop: 30,
                paddingTop: 16,
                paddingBottom: 26,
                paddingHorizontal: 15,
                position: "relative",
              }}
            >
              <AppText
                style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}
              >
                SILVER PLAN
              </AppText>
              <AppText
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                  marginTop: 10,
                }}
              >
                ₦40.50
                <AppText
                  style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}
                >
                  {" "}
                  Monthly
                </AppText>
              </AppText>

              {[1, 2, 3, 4].map((item, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    //   backgroundColor: "red",
                    justifyContent: "center",
                    marginTop: 22,
                    width: 270,
                  }}
                >
                  <Ionicons
                    name="checkmark-circle"
                    style={{
                      fontSize: 26,
                      color: "white",
                      marginRight: 5,
                    }}
                  />
                  <AppText
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: "400",
                      textAlign: "justify",
                      width: 240,
                      // backgroundColor: "white",
                    }}
                  >
                    Combined medical cover of 1.2 million per year
                  </AppText>
                </View>
              ))}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 100,
                  left: 20,
                }}
              >
                <AppText
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  View Hospital
                </AppText>
                <Ionicons
                  name="chevron-down"
                  style={{
                    fontSize: 26,
                    color: "white",
                    marginRight: 5,
                  }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  width: 300,
                  alignItems: "center",
                }}
              >
                <Button
                  onPressProp={() => setPlanBought(true)}
                  title="Buy Plan"
                  bgColor="#fff"
                  btnW={270}
                  txtStyle={{
                    color: "#0E214D",
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <UpperNavigation color="#03045E" back title="Thank You!" />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
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
                  marginBottom: 52,
                  padding: 0,
                }}
              >
                <Image source={require("../../assets/images/checked.png")} />
              </View>
              <AppText
                style={{
                  color: "#6D7589",
                  fontSize: 16,
                  fontWeight: "400",
                  textAlign: "center",
                  width: windowWidth - 40,
                  marginHorizontal: 20,
                }}
              >
                Your Gold plan subscription has been activated! You will recieve
                an email reciept shortly.
              </AppText>
              <View
                style={{
                  width: windowWidth - 40,
                  marginHorizontal: 20,
                  marginTop: 120,
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
        </>
      )}
    </View>
  );
}
