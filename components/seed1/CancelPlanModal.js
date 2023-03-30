import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Button from "./Button";

export default function CancelPlanModal({ show, setIsOpenCancelModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ width: 295, }}>
              <AppText
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#03045E",
                  textAlign: "center",
                }}
              >
                Are you sure you want to cancel the subscription plans
              </AppText>
            </View>

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 62 }}
            >
              <Button
                btnW={175}
                txtStyle={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                bgColor="#0364FF"
                title="Yes, Cancel"
              />
              <View style={{ marginHorizontal: 3 }}></View>
              <Button
                onPressProp={() => setIsOpenCancelModal(false)}
                txtStyle={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                btnW={175}
                bgColor="#0e214c"
                title="No"
              />
            </View>
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
    height: 330,
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
