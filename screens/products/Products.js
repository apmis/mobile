import {
  View,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import AppText from "../../components/seed1/AppText";
import NotificationCard from "../../components/seed1/NotificationCard";
import { useAppHooks } from "../../hooks/seed1/useAppHooks";

export default function Products({ navigation }) {
  const [products, setProducts] = useState([
    {
      id: 6,
      product_name: "Flagyl",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 650,
      quantity: 1,
    },
    {
      id: 7,
      product_name: "Septrin",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 9880,
      quantity: 1,
    },
    {
      id: 8,
      product_name: "Astymin",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 6560,
      quantity: 1,
    },
    {
      id: 9,
      product_name: "Loratidine",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 1350,
      quantity: 1,
    },
    {
      id: 10,
      product_name: "WateOn",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 1350,
      quantity: 1,
    },
    {
      id: 11,
      product_name: "Chemiron",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aspirin1.jpg",
      price: 1350,
      quantity: 1,
    },
  ]);
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const { width: windowWidth } = Dimensions.get("window");
  const { numberWithCommas } = useAppHooks();
  const searchProduct = (text) => {


    if (!text) {
      setDisplayedProducts(products);
    } else {
      let result = products.filter((prod) => {
        return prod.product_name
          .toLowerCase()
          .includes(text.toLowerCase());
      });
      setDisplayedProducts(result);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Marketplace"
        rightIcon
        rightIconName="cart"
        rightIconFunc={() => navigation.navigate("CartDetails")}
        isCart
      />

      <View
        style={{
          backgroundColor: "#fff",
          height: 56,
          borderRadius: 16,
          width: windowWidth - 40,
          marginHorizontal: 20,
          position: "relative",
          marginTop: 43,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            backgroundColor: "#fafafa",
            borderColor: "#fff",
            borderRadius: 16,
            height: 56,
          }}
          placeholder="search"
          onChangeText={(text) => searchProduct(text)}
        />
        <TouchableOpacity
          style={{
            width: 52,
            height: 44,
            backgroundColor: "#0E214D",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 5,
            top: 5,
          }}
        >
          <Ionicons
            name="options-outline"
            style={{ fontSize: 26, color: "#fff" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 23,
          marginBottom: 30,
        }}
      >
        {!displayedProducts.length ? (
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="sad-outline"
              style={{ fontSize: 30, color: "#0364FF" }}
            />
            <AppText
              style={{ textAlign: "center", marginTop: 10, color: "#0364FF" }}
            >
              No Product Found
            </AppText>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {/* [ require("../../assets/images/product_img.png"),
            require("../../assets/images/product_img2.png"),
            require("../../assets/images/product_img3.png"),
            require("../../assets/images/product_img.png"),
            require("../../assets/images/product_img2.png"),
            require("../../assets/images/product_img.png"), ] */}
              {displayedProducts?.map((item, i) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("ProductDetails", { item })
                  }
                  key={i}
                  style={{
                    height: 272,
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    width: windowWidth / 2.3,
                    marginVertical: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 152,
                      width: 121,
                      marginTop: 30,
                    }}
                  >
                    <Image
                      // source={{uri: `${item.img}`}}
                      source={require("../../assets/images/product_img.png")}
                    />
                  </View>
                  <View
                    style={{ marginTop: 18, marginLeft: 13, width: "100%" }}
                  >
                    <AppText
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        color: "#070C18",
                      }}
                    >
                      {item.product_name}
                    </AppText>
                    <AppText
                      style={{
                        fontWeight: "700",
                        fontSize: 14,
                        color: "rgba(7, 12, 24, 0.87)",
                        marginTop: 4,
                      }}
                    >
                      ₦{numberWithCommas(item.price * item.quantity)}
                    </AppText>
                  </View>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      <NotificationCard content="Product added to cart" show={false} />
    </View>
  );
}
