import {
  Image,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Button from "../../components/seed1/Button";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import { Picker } from "@react-native-picker/picker";
import AppText from "../../components/seed1/AppText";
import Bar from "../../components/seed1/Bar";
import Allergies from "../../components/seed1/Allergies";
import Diseases from "../../components/seed1/Diseases";

export default function MedicalRecords() {
  const { width: windowWidth } = Dimensions.get("window");
  const [showAllergies, setShowAllergies] = useState(false);
  const [showDiseases, setShowDiseases] = useState(false);
  const [allergiesArr, setAllergiesArr] = useState(["Paracetamol"]);
  const [diseasesArr, setDiseasesArr] = useState(["Cholesterol"]);

  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1,  }}>
      <Bar />
      <UpperNavigation back title="My Medical Records" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 30 }}
      >
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 26,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16 }}>
            Select Blood Type
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
            // selectedValue={selectedLanguage}
            // onValueChange={(itemValue, itemIndex) =>
            //   setSelectedLanguage(itemValue)
            // }
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
            marginTop: 26,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16 }}>
            Allergies
          </AppText>
          <Pressable
            onPress={() => setShowAllergies(true)}
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
     
     
            <AppText>{allergiesArr.slice(0, 3) + '...'}</AppText>
           
          </Pressable>
        </View>
        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 26,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16 }}>
            Enter Diseases
          </AppText>
          <Pressable
            onPress={() => setShowDiseases(true)}
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
     
     
            <AppText>{diseasesArr.slice(0, 3) + '...'}</AppText>
           
          </Pressable>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: windowWidth / 2.3,

              borderRadius: 4,
              marginTop: 26,
            }}
          >
            <AppText style={{ fontWeight: "400", fontSize: 16 }}>
              Height(cm)
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
              keyboardType = "phone-pad"
      
            />
          </View>
          <View
            style={{
              width: windowWidth / 2.3,
              borderRadius: 4,
              marginTop: 26,
            }}
          >
            <AppText style={{ fontWeight: "400", fontSize: 16 }}>
              Weight (kg)
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
              keyboardType = "phone-pad"
            />
          </View>
        </View>

        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            borderRadius: 4,
            marginTop: 26,
          }}
        >
          <AppText style={{ fontWeight: "400", fontSize: 16 }}>
            Choose Hospital
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
            <Picker>
              <Picker.Item label="Dakorea Hospital" value="Dakorea Hospital" />
              <Picker.Item label="Alpha Hospital" value="Alpha Hospital" />
            </Picker>
          </View>
        </View>

        <View
        style={{
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 100
        }}
      >
        <Button
          btnRadius={4}
          bgColor={"#0364FF"}
          title={"Save Changes"}
          txtStyle={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}
        />
      </View>
      </ScrollView>

      <Allergies
        show={showAllergies}
        setShowAllergies={setShowAllergies}
        setAllergiesArr={setAllergiesArr}
        allergiesArr={allergiesArr}
      />

      <Diseases show={showDiseases} setShowDiseases={setShowDiseases} diseasesArr={diseasesArr} setDiseasesArr={setDiseasesArr} />
    </View>
  );
}
