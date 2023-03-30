import {
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductReview from "../../components/seed1/ProductReview";

import { useDispatch, useSelector } from "react-redux";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Bar from "../../components/seed1/Bar";
import AppText from "../../components/seed1/AppText";
import Button from "../../components/seed1/Button";
import NotificationCard from "../../components/seed1/NotificationCard";
import { useAppHooks } from "../../hooks/seed1/useAppHooks";
import {
  increaseQuantity,
  reduceQuantity,
  addToCart,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const { width } = Dimensions.get("window");
const { numberWithCommas } = useAppHooks();

const productImages = [
  {
    image: require("../../assets/images/product_img.png"),
  },
  {
    image: require("../../assets/images/product_img2.png"),
  },
  {
    image: require("../../assets/images/product_img3.png"),
  },
];

const Slide = ({ item, currentSlideIndex }) => {
  return (
    <View
      className="items-center"
      style={{ width: width - 40, backgroundColor: "#fff", borderRadius: 10 }}
    >
      <View style={{ height: 209, width: 209, marginTop: 57 }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={productImages[0].image}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 22,
          marginTop: 27,
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[
              currentSlideIndex == index
                ? {
                    backgroundColor: "#03045E",
                    width: 8,
                    height: 8,
                    borderRadius: 100,
                    marginHorizontal: 3,
                  }
                : {
                    backgroundColor: "#ccc",
                    width: 8,
                    height: 8,
                    borderRadius: 100,
                    marginHorizontal: 3,
                  },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default function ProductDetails({ navigation, route }) {
  const [prodReview, setProdReview] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const { item } = route.params;
  const [product, setProduct] = useState({
    ...item,
    id: item._id,
    price: item.amount / item.quantity,
    totalCost: item.amount,
  });
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const dispatch = useDispatch();
  //GLOBAL STATES
  const cartItems = useSelector((state) => state.cart);
  const prodAlreadyInCart = cartItems.find((prod) => prod.id == product.id);

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title={product.name}
        rightIcon
        rightIconName="cart"
        rightIconFunc={() => navigation.navigate("CartDetails")}
        isCart
        // goBack={navigation.goBack()}
      />

      <View
        style={{
          height: 323,
          backgroundColor: "#f3f3f3",
          borderRadius: 10,
          marginTop: 24,
          marginHorizontal: 20,
        }}
      >
        <FlatList
          data={productImages}
          keyExtractor={(s, i) => i}
          pagingEnabled
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ product }) => (
            <Slide item={product} currentSlideIndex={currentSlideIndex} />
          )}
        />
      </View>
      <View
        style={{
          width: width - 40,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 19,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <AppText
            className="capitalize"
            style={{
              fontWeight: "800",
              fontSize: 22,
              color: "rgba(7, 12, 24, 0.87)",
            }}
          >
            {product.name}
          </AppText>
          <AppText
            style={{
              fontWeight: "800",
              fontSize: 24,
              color: "#0364FF",
            }}
          >
            ₦{numberWithCommas(product.totalCost / product.quantity)}
          </AppText>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={
              prodAlreadyInCart
                ? () => dispatch(reduceQuantity(product))
                : () => dispatch(removeFromCart(product))
            }
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Ionicons name="remove-outline" style={{ fontSize: 20 }} />
          </TouchableOpacity>
          <AppText
            style={{ fontWeight: "400", fontSize: 12, color: "#666666" }}
          >
            {prodAlreadyInCart ? prodAlreadyInCart.quantity : product.quantity}
          </AppText>

          <TouchableOpacity
            onPress={
              prodAlreadyInCart
                ? () => dispatch(increaseQuantity(product))
                : () => dispatch(addToCart(product))
            }
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Ionicons name="add-outline" style={{ fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: width - 40,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <Pressable onPress={() => setProdReview(true)}>
              <AppText
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  color: "#03045E",
                  textDecorationLine: "underline",
                }}
              >
                500 reviews
              </AppText>
            </Pressable>
            {["Description", "Dosage"].map((item, i) => (
              <View key={i} style={{ marginTop: 12, marginBottom: 25 }}>
                <AppText
                  style={{ fontWeight: "500", fontSize: 16, color: "#03045E" }}
                >
                  {item}
                </AppText>
                <AppText
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "#6D7589",
                    lineHeight: 19,
                    marginTop: 8,
                  }}
                >
                  Dabor Broncoid contains 76 grams of metholyne, Syrup, liquid.
                  It helps cure cough for adult and children. Should be taken
                  after eating only once daily. Avoid overdose and please take 2
                  spoons daily till result.
                </AppText>
              </View>
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onPressProp={() => {
              setShowNotification(true);
              setTimeout(() => {
                dispatch(addToCart(product));
                setShowNotification(false);
              }, 100);
            }}
            btnW="48%"
            title="Add to Cart"
            txtStyle={{ color: "#fff" }}
          />
          <Button
            btnW="48%"
            title="Buy Now"
            bgColor="#0E214D"
            txtStyle={{ color: "#fff" }}
          />
        </View>
      </View>

      <ProductReview show={prodReview} setProdReview={setProdReview} />

      <NotificationCard
        show={showNotification}
        content={
          prodAlreadyInCart ? "Item already in cart" : "Item added to cart"
        }
      />
    </View>
  );
}
