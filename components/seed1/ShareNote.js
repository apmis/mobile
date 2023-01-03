import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "./AppText";
import Button from "./Button";

export default function ShareNote({ goHome, show, setShare }) {
  const windowWidth = Dimensions.get("window").width;
  const [shareTo, setShareTo] = useState("");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      style={{ position: "relative" }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {shareTo == "" ? (
            <View
              style={{ width: windowWidth - 60, marginHorizontal: 30 }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AppText
                  style={{ fontSize: 16, fontWeight: "600", color: "#0E214D" }}
                >
                  Share Clinical Notes
                </AppText>
                <Ionicons
                  onPress={() => setShare(false)}
                  name="close-outline"
                  style={{
                    fontSize: 30,
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => setShareTo("Individual")}>
                <AppText
                  style={{
                    marginTop: 24,
                    color: "#0E214D",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  To Individual
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity>
                <AppText
                  style={{
                    marginTop: 24,
                    color: "#0E214D",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Global
                </AppText>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{ width: windowWidth - 60, marginHorizontal: 30 }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AppText
                  style={{ fontSize: 16, fontWeight: "600", color: "#0E214D" }}
                >
                  Share To Individual
                </AppText>
                <Ionicons
                  onPress={() => setShareTo("")}
                  name="close-outline"
                  style={{
                    fontSize: 30,
                  }}
                />
              </View>
              <View
                style={{
                //   width: windowWidth - 40,
                //   marginHorizontal: 20,
                  borderRadius: 4,
                  marginTop: 26,
                }}
              >
                <AppText style={{ fontWeight: "400", fontSize: 16 }}>
                Enter email/Phone Number
                </AppText>
                <TextInput
                  style={{
                    height: 55,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderColor: "#D2D2D2",
                    borderRadius: 4,
                    marginTop: 8,
                  }}
                  placeholder=""
                />
              </View>
            </View>
          )}
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
