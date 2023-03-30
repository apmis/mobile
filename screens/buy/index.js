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

export default function Buy({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");

  const views = [
    {
      title: "Drugs",
      img: require("../../assets/images/drugs.png"),
      link: "Products",
    },
    {
      title: "Health Insurance",
      img: require("../../assets/images/health_insurance.png"),
      link: "GetInsured",
    },
    {
      title: "Consumables",
      img: require("../../assets/images/consumables.png"),
      link: "Dashboard",
    },
    {
      title: "Wallet",
      img: require("../../assets/images/wallet.png"),
      link: "Wallet",
    },
    {
      title: "Bills",
      img: require("../../assets/images/wallet.png"),
      link: "Bills",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar />
      <UpperNavigation back title="Buy" />
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
