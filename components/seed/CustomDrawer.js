import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { assets, COLORS } from "./constants";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        {/* <ImageBackground
          source={require("../../assets/apple.png")}
          style={{ padding: 20 }}
        > */}
        <View className="p-5 flex flex-row items-center space-x-4">
          <Image
            source={require("../../assets/profile-pic.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <View>
            <Text
              style={{
                //   color: "#fff",
                fontSize: 18,
                //   fontFamily: "Roboto-Medium",
                marginBottom: 5,
              }}
            >
              Christian Peters
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  // fontFamily: "Roboto-Regular",
                  marginRight: 5,
                }}
              >
                Account
              </Text>
            </View>
          </View>
        </View>

        {/* </ImageBackground> */}
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
