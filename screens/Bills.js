import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Bar from "../components/seed1/Bar";
import UpperNavigation from "../components/seed1/UpperNavigation";
import BillPayModal from "../components/seed1/BillPayModal";
import AppText from "../components/seed1/AppText";
import client from "../feathers";
import timeHandler from "../utils/functions/time";

export default function Bills() {
  const [data, setData] = useState([]);
  const bills = client.service("bills");
  const windowWidth = Dimensions.get("window").width;
  const [billModal, setBillModal] = useState(false);
  const fetch = async () => {
    try {
      const billRes = await bills.find({
        query: {
          "participantInfo.clientId": "63e2311467307d001434e3b8",
          // createdBy: "61b3610e316cc8001649a9fd",
          clientId: { $nin: ["63e2311467307d001434e3b8"] },
          $limit: 10,
          $sort: {
            createdAt: -1,
          },
          $select: [
            "report_status",
            "clientId",
            "createdAt",
            "serviceInfo.amount",
            "serviceInfo.name",
          ],
        },
      });

      console.log("Now: ", billRes.data);
      setData(billRes.data);
      // Do something with the user object here
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Bar hideBar={false} />
      <UpperNavigation back title="Bills" />
      <View
        style={{
          flex: 1,
          width: windowWidth - 40,
          marginHorizontal: 20,
          marginTop: 35,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, i) => (
            <React.Fragment key={i}>
              <Pressable onPress={() => setBillModal(true)}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    height: 71,
                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/images/pending_arrow.png")}
                    />
                    <View style={{ marginLeft: 16 }}>
                      <AppText
                        style={{
                          fontWeight: "400",
                          fontSize: 16,
                          color: "#03045E",
                        }}
                      >
                        {item.serviceInfo.name}
                      </AppText>
                      <AppText
                        style={{
                          fontWeight: "400",
                          fontSize: 12,
                          color: "#6D7589",
                        }}
                      >
                        {item.report_status}, {timeHandler(item.createdAt)}
                      </AppText>
                    </View>
                  </View>
                  <AppText
                    style={{
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#001B6A",
                    }}
                  >
                    ₦{item.serviceInfo.amount}
                  </AppText>
                </View>
              </Pressable>
              <View style={{ borderWidth: 1, borderColor: "#ccc" }}></View>
            </React.Fragment>
          ))}
        </ScrollView>
      </View>

      <BillPayModal show={billModal} setBillModal={setBillModal} />
    </View>
  );
}
