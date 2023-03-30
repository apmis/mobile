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

export default function ProductReview({ goHome, show, setProdReview }) {
  const windowWidth = Dimensions.get("window").width;
  const [writeReview, setWriteReview] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      style={{ position: "relative" }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView
            style={{ width: windowWidth - 60, marginHorizontal: 30 }}
            showsVerticalScrollIndicator={false}
          >
            {[1, 2, 3, 4, 1, 2, 3, 4].map((item, i) => (
              <View
                key={i}
                style={{
                  marginVertical: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 100,
                        backgroundColor: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require("../../assets/images/profile.png")}
                      />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                      <AppText>Natasha</AppText>
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        {[1, 2, 3, 4, 5].map((item, i) => (
                          <Ionicons
                            key={i}
                            name="star"
                            style={{
                              color: "#ffbd14",
                              fontSize: 18,
                            }}
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                  <AppText
                    style={{
                      color: "#6D7589",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    4 weeks ago
                  </AppText>
                </View>
                <View>
                  <AppText
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#6D7589",
                      marginTop: 8,
                      lineHeight: 22,
                    }}
                  >
                    Dr. Bruce is an excellent family care practician who is very
                    thorough, excellent manner and cares for her patients as
                    though they were her own family member. I highly recommend
                    her as a physician.
                  </AppText>
                </View>
              </View>
            ))}
          </ScrollView>
          <Ionicons
            onPress={() => setProdReview(false)}
            name="close-outline"
            style={{
              fontSize: 30,
              position: "absolute",
              top: 10,
              right: 30,
            }}
          />
        </View>
        {writeReview ? (
          <View
            style={{
              position: "absolute",
              top: 100,
              // width: "100%",
              backgroundColor: "#fff",
              zIndex: 999999,
              width: windowWidth - 60, marginHorizontal: 30
            }}
          >
            <View
              style={{
                borderWidth: 2,
                padding: 10,
                borderRadius: 8,
                borderColor: "#eee",
                height: 200,
                width: "100%",
              }}
            >
              <TextInput
                style={{ height: "100%" }}
                placeholder="Write a review about this product"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Button title="Submit" btnW="45%" txtStyle={{ color: "#fff" }} />
              <Button
                title="Cancel"
                bgColor="orange"
                btnW="45%"
                txtStyle={{ color: "#fff" }}
                onPressProp={() => setWriteReview(!writeReview)}
              />
            </View>
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={{ position: "absolute" }}
          onPress={() => setWriteReview(!writeReview)}
        >
          <Ionicons
            name="add-circle"
            style={{ fontSize: 35, color: "#0364FF" }}
          />
        </TouchableOpacity>
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
