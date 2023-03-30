import React from "react";
import { Modal, Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Button from "./Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "./AppText";

export default function BillPayModal({ goHome, show, setBillModal }) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ width: "100%", marginTop: 40 }}>
            <View style={{ marginTop: 20 }}>
              <AppText
                style={{ fontWeight: "600", fontSize: 16, color: "#0E214D" }}
              >
                Description
              </AppText>
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#0E214D",
                  marginTop: 8,
                }}
              >
                Lab Order
              </AppText>
            </View>
            <View style={{ marginTop: 20 }}>
              <AppText
                style={{ fontWeight: "600", fontSize: 16, color: "#0E214D" }}
              >
                Amount
              </AppText>
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#0E214D",
                  marginTop: 8,
                }}
              >
                ₦5,000
              </AppText>
            </View>
            <View style={{ marginTop: 20 }}>
              <AppText
                style={{ fontWeight: "600", fontSize: 16, color: "#0E214D" }}
              >
                Status
              </AppText>
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#0E214D",
                  marginTop: 8,
                }}
              >
                Unpaid
              </AppText>
            </View>
          </View>
          <View
            style={{
              width: windowWidth - 80,
              marginHorizontal: 40,
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
              title="Pay (₦5,000 )"
              txtStyle={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}
            />
          </View>
          <Ionicons
            onPress={() => setBillModal(false)}
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
    display: "flex",
    position: "relative",
    alignItems: "center",
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
