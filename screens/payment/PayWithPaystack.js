/* import { View, Text } from "react-native";
import React from "react";
import { Paystack } from "react-native-paystack-webview";
import { useSelector } from "react-redux";

export default function PayWithPaystack({ navigation }) {
  const cartItems = useSelector((state) => state.cartState);

  const cartTotal = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total(),
    0
  );
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_4fedad5180c7c3bef0d5d1b764c4ce546822c62b"
        amount={cartTotal}
        billingEmail="appmis@gmail.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          setTimeout(() => {
            navigation.navigate("OrderPlaced");
          }, 5000);
        }}
        autoStart={true}
      />
    </View>
  );
}
 */
