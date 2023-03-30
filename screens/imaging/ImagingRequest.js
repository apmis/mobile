import {  View, TextInput, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

import Bar from "../../components/seed1/Bar";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";

export default function ImagingRequest({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [selectedLanguage, setSelectedLanguage] = useState();
  // const isLoggedIn = useSelector((state) => state.isLoggedInState);

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Request Imaging Examination" />

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
            Choose Center
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
              <Picker.Item label="Full Blood Count" value="Full Blood Count" />
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
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Imaging Type
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
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 10,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16, marginTop: 20 }}>
            Imaging
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
              <Picker.Item label="Abdominal scan" value="Abdominal scan" />
              <Picker.Item label="Pelvic Scan" value="Pelvic Scan" />
              <Picker.Item label="MRI" value="MRI" />
              <Picker.Item label="ECHOGRAM" value="ECHOGRAM" />
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
            onPressProp={() => navigation.navigate("ImagingRequestMade")}
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
