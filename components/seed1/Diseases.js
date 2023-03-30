import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "./AppText";

export default function Diseases({
  show,
  setShowDiseases,
  setDiseasesArr,
  diseasesArr,
}) {
  const { width: windowWidth } = Dimensions.get("window");
  const [diseases, setDiseases] = useState([
    "Cholesterol",
    "Athritis",
    "PCOS",
    "Diabetes",
    "Epilepsy",
    "Asthma",
  ]);
  const [displayedDiseases, setDisplayedDiseases] = useState(diseases);
  const [diseaseSearch, setDiseaseSearch] = useState("");

  const selectAllergies = (disease) => {
    let diseaseIndex = diseasesArr.findIndex((name) => name == disease);
    if (diseaseIndex < 0) {
      setDiseasesArr([...diseasesArr, disease]);
    } else {
      diseasesArr.splice(diseaseIndex, 1);
      setDiseasesArr([...diseasesArr]);
    }
  };

  const alreadyChosen = (disease) => {
    return diseasesArr.find((item) => item == disease);
  };

  const searchDisease = (text) => {
    setDiseaseSearch(text);
    if (!text) {
      setDisplayedDiseases(diseases);
    } else {
      let result = diseases.filter((dis) => {
        return dis.toLowerCase().includes(text.toLowerCase());
      });
      setDisplayedDiseases(result);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      style={{ position: "relative" }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: windowWidth - 40,
            }}
          >
            <AppText>Diseases</AppText>
            <Ionicons
              onPress={() => setShowDiseases(false)}
              name="close-outline"
              style={{
                fontSize: 28,
              }}
            />
          </View>
          <View
            style={{
              height: 50,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#D2D2D2",
              width: windowWidth - 40,
              marginTop: 24,
              position: "relative",
            }}
          >
            <TextInput
              onChangeText={(text) => searchDisease(text)}
              placeholder="Search diseases"
              style={{ height: "100%", paddingLeft: 22 }}
              value={diseaseSearch}
            />
            <Ionicons
              onPress={() => {
                setDiseaseSearch("");
                searchDisease("");
              }}
              name="close-outline"
              style={{ fontSize: 15, position: "absolute", right: 10, top: 15 }}
            />
          </View>
          <ScrollView
            style={{ width: windowWidth - 40, marginHorizontal: 30 }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                marginVertical: 15,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {displayedDiseases.map((item, i) => (
                <TouchableOpacity
                  onPress={() => selectAllergies(item)}
                  key={i}
                  style={{
                    backgroundColor: "#f7f6fb",
                    padding: 12,
                    borderRadius: 5,
                    marginRight: 14,
                    marginVertical: 5,
                    borderColor: alreadyChosen(item) ? "#0364FF" : "",
                    borderWidth: alreadyChosen(item) ? 1 : 0,
                  }}
                >
                  <AppText
                    style={{
                      color: alreadyChosen(item) ? "#0364FF" : "#6F6F6F",
                      fontWeight: "400",
                      fontSize: 14,
                    }}
                  >
                    {item}
                  </AppText>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    display: "flex",
    position: "relative",
    alignItems: "center",
    borderRadius: 20,
    width: "95%",
    flex: 1,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
