import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import AppText from "./AppText";
import Button from "./Button";

export default function AppointmentBooked({ goHome, show, setBookedModal }) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 295,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../../assets/images/checked.png")} />
              <AppText
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#03045E",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Thank You! Your Appointment Created
              </AppText>
              <AppText
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#6D7589",
                  textAlign: "center",
                  lineHeight: 19,
                  marginTop: 10,
                }}
              >
                You booked an appoinment with Dr. Mildred Mathasgha on July 21,
                at 10:00 am
              </AppText>
            </View>
          </View>

          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              marginTop: 20,
              marginBottom: 20,
              position: "absolute",
              bottom: 0,
            }}
          >
            <Button
              onPressProp={goHome}
              bgColor="#0364FF"
              btnRadius={4}
              btnH={44}
              title="Go Home"
              txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
            />
          </View>
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
    paddingHorizontal: 29,
    display: "flex",
    justifyContent: "center",
    borderRadius: 20,
    width: "95%",
    height: 500,
    alignItems: "center",
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
