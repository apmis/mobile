/* import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import React from "react";
import AppText from "../../components/seed1/AppText";
import Bar from "../../components/seed1/Bar";
import UpperNavigation from "../../components/seed1/UpperNavigation";
import Button from "../../components/seed1/Button";
import { PayWithFlutterwave } from "flutterwave-react-native";

export default function Payment({ navigation }) {
  const { width: windowWidth } = Dimensions.get("window");

  const handleOnRedirect = () => {
    console.log("sadi");
  };

  const generateRef = (length) => {
    var a =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  };
  return (
    <View style={{ flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Payment" />

      <View
        style={{
          width: windowWidth - 40,
          flex: 1,
          marginHorizontal: 20,
          marginTop: 100,
        }}
      >
        <View style={{ marginVertical: 10 }}>
          <Button
            txtStyle={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
            title="Pay With Wallet"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPressProp={() => navigation.navigate("PayWithPaystack")}
            bgColor="#00c3f7"
            txtStyle={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
            title="Pay With Paystack"
          />
        </View>

        <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          options={{
            tx_ref: generateRef(11),
            authorization: "FLWPUBK_TEST-7b3b2f4d15ca66a3dda14f11efeb9893-X",
            customer: {
              email: "banjotola12@gmail.com",
            },
            amount: 2000,
            currency: "NGN",
            payment_options: "card",
          }}
          customButton={(props) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#eda123",
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                marginVertical: 10,
              }}
              onPress={props.onPress}
              isBusy={props.isInitializing}
              disabled={props.disabled}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
                Pay With Fullterwave
              </Text>
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            marginVertical: 10,
            backgroundColor: "#eda123",
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ActivityIndicator color="#fff" />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            bgColor="#eda123"
            txtStyle={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
            title="Pay With Fullterwave"
          />
        </View>
      </View>
    </View>
  );
}
 */
