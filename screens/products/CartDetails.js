import { View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import AppText from "../../components/seed1/AppText";
import Button from "../../components/seed1/Button";
import CartItem from "../../components/seed1/CartItem";
import NotificationCard from "../../components/seed1/NotificationCard";

export default function CartDetails({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");
  const [showNotification, setShowNotification] = useState(false);

  //GLOBAL STATES
  const cartItems = useSelector((state) => state.cart) || [];
  console.log(cartItems);
  // const reRender = useSelector((state) => state.reRender);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <Bar hideBar={false} />
      <UpperNavigation
        back
        title="Carts"
        rightIcon
        rightIconName="cart"
        isCart
      />

      {cartItems.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            width: windowWidth - 40,
            marginHorizontal: 20,
            paddingTop: 48,
          }}
        >
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              setShowNotification={setShowNotification}
            />
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <AppText style={{ fontSize: 20 }}>Your cart is empty!</AppText>
          <Ionicons
            name="cart-outline"
            style={{ fontSize: 26, marginTop: 20 }}
          />
        </View>
      )}

      <View
        style={{
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        {cartItems.length ? (
          <Button
            onPressProp={() => navigation.navigate("Dashboard")}
            btnRadius={4}
            txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
            title={"Checkout"}
          />
        ) : (
          // <Button
          //   onPressProp={() => navigation.navigate("OrderPlaced")}
          //   btnRadius={4}
          //   txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
          //   title={"Checkout"}
          // />
          <Button
            onPressProp={() => navigation.navigate("Products")}
            btnRadius={4}
            txtStyle={{ color: "white", fontWeight: "700", fontSize: 16 }}
            title={"Go back"}
          />
        )}
      </View>

      <NotificationCard
        content="Item removed from cart"
        show={showNotification}
      />
    </View>
  );
}
