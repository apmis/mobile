import {
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Bar from "../components/seed1/Bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "../components/seed1/Button";
import UpperNavigation from "../components/seed1/UpperNavigation";
import { Picker } from "@react-native-picker/picker";

export default function MedicalProfile() {
  const [openBio, setOpenBio] = useState(true);
  const [openAddress, setOpenAddress] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="My Profile" />

      <View
        style={{
          marginTop: 34,
          position: "relative",
        }}
      >
        <View
          style={{ height: 50, backgroundColor: "#F3F3F3", width: "100%" }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 999999,
            bottom: 40,
            left: 130,
          }}
        >
          <View style={{ width: 153, height: 153, position: "relative" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/images/profile.png")}
            />

            <Pressable
              style={{
                height: 30,
                width: 30,
                backgroundColor: "#0e214c",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: -10,
                right: -10,
              }}
            >
              <Ionicons
                name="pencil-outline"
                style={{
                  color: "#fff",
                  fontSize: 14,
                }}
              />
            </Pressable>
          </View>
          <Text
            style={{
              color: "#0E214D",
              fontWeight: "600",
              fontSize: 16,
              marginTop: 16,
            }}
          >
            Banjo Oluwaseun
          </Text>
        </View>
        <View
          style={{ height: 170, backgroundColor: "#E4F3FE", width: "100%" }}
        ></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {["First Name", "Last Name", "Middle Name"].map((item, i) => (
          <View
            style={{
              width: windowWidth - 40,
              marginHorizontal: 20,
              borderRadius: 4,
              marginTop: 10,
            }}
            key={i}
          >
            <Text style={{ fontWeight: "400", fontSize: 16 }}>{item}</Text>
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
              placeholder="Tola"
            />
          </View>
        ))}

        <View
          style={{
            backgroundColor: "#fff",
            height: 61,
            width: windowWidth - 40,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 18,
            marginTop: 24,
          }}
        >
          <Text style={{ color: "#03045E", fontSize: 16, fontWeight: "800" }}>
            BIO DATA
          </Text>
          <TouchableOpacity onPress={() => setOpenBio(!openBio)}>
            {openBio ? (
              <Ionicons
                name="chevron-down-outline"
                style={{
                  //   color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                  fontSize: 26,
                }}
              />
            ) : (
              <Ionicons
                name="chevron-forward-outline"
                style={{
                  //   color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                  fontSize: 26,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        {openBio ? (
          <>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Email</Text>
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
                placeholder="Tola"
              />
            </View>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
                Phone Number 1
              </Text>
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
                placeholder="Tola"
              />
            </View>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
                Phone Number 2
              </Text>
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
                placeholder="Tola"
              />
            </View>

            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Gender</Text>
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
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Femail" value="Femail" />
                  <Picker.Item
                    label="Prefer not to say"
                    value="Prefer not to say"
                  />
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Religion</Text>
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
                  <Picker.Item label="Christian" value="Christian" />
                  <Picker.Item label="Muslim" value="Muslim" />
                  <Picker.Item label="Others" value="Others" />
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
                Profession
              </Text>
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
                  <Picker.Item
                    label="Software Developer"
                    value="Software Developer"
                  />
                  <Picker.Item label="Trader" value="Trader" />
                  <Picker.Item label="Clergy" value="Clergy" />
                  <Picker.Item label="Farmer" value="Farmer" />
                  <Picker.Item label="Doctor" value="Doctor" />
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
                Marital Status
              </Text>
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
                  <Picker.Item label="Single" value="Single" />
                  <Picker.Item label="Married" value="Married" />
                  <Picker.Item label="Divorcee" value="Divorcee" />
                  <Picker.Item
                    label="Prefer not to say"
                    value="Prefer not to say"
                  />
                </Picker>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}

        <View
          style={{
            backgroundColor: "#fff",
            height: 61,
            width: windowWidth - 40,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 18,
            marginTop: 24,
          }}
        >
          <Text style={{ color: "#03045E", fontSize: 16, fontWeight: "800" }}>
            ADDRESS
          </Text>
          <TouchableOpacity onPress={() => setOpenAddress(!openAddress)}>
            {openAddress ? (
              <Ionicons
                name="chevron-down-outline"
                style={{
                  fontSize: 26,
                }}
              />
            ) : (
              <Ionicons
                name="chevron-forward-outline"
                style={{
                  fontSize: 26,
                }}
              />
            )}
          </TouchableOpacity>
        </View>

        {openAddress ? (
          <>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Country</Text>
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
                  <Picker.Item label="Nigeria" value="Nigeria" />
                  <Picker.Item label="Others" value="Others" />
                  <Picker.Item label="Divorcee" value="Divorcee" />
                  <Picker.Item
                    label="Prefer not to say"
                    value="Prefer not to say"
                  />
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
                Residential Address
              </Text>
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
                placeholder="Enter Address"
              />
            </View>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>State</Text>
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
                  <Picker.Item label="Lagos" value="Lagos" />
                  <Picker.Item label="Others" value="Others" />
           
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Local Government</Text>
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
                  <Picker.Item label="Epe" value="Epe" />
                  <Picker.Item label="Others" value="Others" />
           
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>Local Government</Text>
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
                  <Picker.Item label="Ikorodu" value="Ikorodu" />
                  <Picker.Item label="Others" value="Others" />
           
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
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
              Neigbourhood
              </Text>
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
                placeholder="Enter address"
              />
            </View>
            <View
              style={{
                width: windowWidth - 40,
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 26,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 16 }}>
              Street Address
              </Text>
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
                placeholder="Enter address"
              />
            </View>
          </>
        ) : (
          <></>
        )}

        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
            alignItems: "flex-start",
          }}
        >
          <View style={{ width: 30, height: 30, marginRight: 10 }}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="#0364FF"
              isChecked={true}
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text
              style={{
                color: "#6D7589",
                fontSize: 14,
                fontWeight: "400",
                margin: 0,
              }}
            >
              I give the doctor consent to see my Healh Profile during my
              appointment and/ or treatment
            </Text>
          </View>
        </View>

        <View
          style={{
            width: windowWidth - 40,
            marginHorizontal: 20,
            marginVertical: 50,
          }}
        >
          <Button
            btnRadius={4}
            btnH={50}
            bgColor={"#0364FF"}
            title={"Save Changes"}
            txtStyle={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
