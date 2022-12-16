import { Text, View, TextInput, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import Bar from "../components/seed1/Bar";
import Button from "../components/seed1/Button";
import UpperNavigation from "../components/seed1/UpperNavigation";
import { Picker } from "@react-native-picker/picker";

export default function ReferPerson({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [selectedLanguage, setSelectedLanguage] = useState();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation
        goBack={goBack}
        back
        title="Refer Someone to A Hospital"
      />

      <ScrollView style={{ flex: 1, marginTop: 40 }}>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Enter Email/Phone
          </Text>

          <TextInput
            style={{
              height: 55,
              borderWidth: 1,
              padding: 10,
              backgroundColor: "#fafafa",
              borderColor: "#D2D2D2",
              borderRadius: 4,
              marginTop: 8,
            }}
            placeholder="person@email.com"
          />
        </View>

        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Select Hospital
          </Text>

          <View
            style={{
              height: 55,
              borderWidth: 1,
              padding: 10,
              backgroundColor: "#fafafa",
              borderColor: "#D2D2D2",
              borderRadius: 4,
              marginTop: 8,
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Jobi Hospital" value="Jobi Hospital" />
              <Picker.Item label="Blood Test" value="Blood Test" />
              <Picker.Item label="PVC" value="PVC" />
              <Picker.Item label="Malaria" value="Malaria" />
            </Picker>
          </View>
        </View>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            marginVertical: 50,
          }}
        >
          <Button
            onPressProp={() => navigation.navigate("ReferralMade")}
            btnRadius={4}
            btnH={50}
            bgColor={"#0364FF"}
            title={"Refer"}
            txtStyle={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
