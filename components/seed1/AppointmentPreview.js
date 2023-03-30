import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import timeHandler from "../../utils/functions/time";
import AppText from "./AppText";

export default function AppointmentPreview({ show, setPreviewModal, data }) {
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AppText
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: "#0E214D",
              marginVertical: 20,
            }}
          >
            {data.appointment_reason}
          </AppText>
          <View style={{ marginBottom: 24 }}>
            <AppText
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#03045E",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Venue
            </AppText>
            <AppText
              className="capitalize"
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#6D7589",
              }}
            >
              {data.location_name}
            </AppText>
          </View>
          <View style={{ marginBottom: 24 }}>
            <AppText
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#03045E",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Time
            </AppText>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#6D7589",
              }}
            >
              {timeHandler(data.client.createdAt)}
            </Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <AppText
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#03045E",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Instructions
            </AppText>
            <AppText
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#6D7589",
                lineHeight: 19,
                textAlign: "auto",
              }}
            >
              Do not exceed 4 doses in any 24 hours. If symptoms persist consult
              your doctor
            </AppText>
          </View>
          <Ionicons
            onPress={() => setPreviewModal(false)}
            name="close-outline"
            style={{
              fontSize: 30,
              position: "absolute",
              top: 10,
              right: 30,
            }}
          />
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
    paddingTop: 30,
    display: "flex",
    position: "relative",
    borderRadius: 20,
    width: "95%",
    height: 500,
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
