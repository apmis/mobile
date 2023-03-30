import { View, TextInput, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

import Bar from "../../components/seed1/Bar";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function BloodRequest({ navigation }) {
  const {width: windowWidth} = Dimensions.get("window");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [bloodMatch, setBloodMatch] = useState(true)
  // const isLoggedIn = useSelector((state) => state.isLoggedInState);

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Request Blood" />

      <ScrollView style={{ flex: 1, marginTop: 40 }}>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Blood Group
          </AppText>

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
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="A+" value="A+" />
            </Picker>
          </View>
        </View>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Blood Bank
          </AppText>

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
              <Picker.Item label="USS" value="USS" />
              <Picker.Item label="X-RAY" value="X-RAY" />
              <Picker.Item label="MRI" value="MRI" />
              <Picker.Item label="ECHOGRAM" value="ECHOGRAM" />
            </Picker>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginHorizontal: 20,
            flexDirection: "row",
            marginTop: 20
          }}
        >
          <AppText style={{ fontSize: 16 }}>Request Blood Match</AppText>
          <View style={{ marginLeft: 10 }}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", height: 20, width: 20 }}
              fillColor="#0364FF"
              isChecked={bloodMatch}
            />
          </View>
        </View>

        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Price
          </AppText>

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
            placeholder="₦5,000"
          />
        </View>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            marginVertical: 50,
          }}
        >
          <Button
            onPressProp={() => navigation.navigate("BloodRequestMade")}
            btnRadius={4}
            bgColor={"#0364FF"}
            title={"Submit"}
            txtStyle={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
