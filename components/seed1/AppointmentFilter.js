import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AppointmentFilter({ show, setFilterModal }) {
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {["Yesterday", "Today", "This Week", "This Month"].map((item, i) => (
            <Pressable key={i}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#0E214D",
                  marginVertical: 20,
                }}
              >
                {item}
              </Text>
            </Pressable>
          ))}

          <Ionicons
            onPress={() => setFilterModal(false)}
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
    // justifyContent: "center",
    // alignItems: "center",
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
