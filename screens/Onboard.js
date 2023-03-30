import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { assets, COLORS } from "../components/seed/constants";
import { Btn } from "../components/seed";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    image: assets.onboardFrame1,
    title: "Consult With Doctors",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta sed blandit quam porttitor phasellus",
  },
  {
    image: assets.onboardFrame2,
    title: "Pay Bills With Ease",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta sed blandit quam porttitor phasellus ",
  },
  {
    image: assets.onboardFrame3,
    title: "Buy Drugs and Consumables",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta sed blandit quam porttitor phasellus",
  },
];

const Slide = ({ item, currentSlideIndex }) => {
  return (
    <View className="items-center  ">
      <Image source={item.image} />
      <View
        className="mt-[33px] mb-[49px]"
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            className="h-[6px]  w-[6px] bg-white mx-[3px] rounded-sm"
            key={index}
            style={[
              currentSlideIndex == index && {
                backgroundColor: COLORS.primaryBlue,
                width: 25,
              },
            ]}
          />
        ))}
      </View>
      <View
        style={{ maxWidth: width }}
        className=" w-[90%]  items-center mx-auto "
      >
        <Text
          style={{ fontFamily: "ManropeExtrBold" }}
          className="text-[20px] text-center text-white"
        >
          {item.title}
        </Text>
        <Text
          style={{ fontFamily: "ManropeMedium", width: width }}
          className="text-white mt-1 px-4"
        >
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};


const Onboard = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.secondaryBlue }}
      className="flex-1 pt-[7%]"
    >
      <StatusBar backgroundColor={COLORS.secondaryBlue} barStyle={""} />

      <View>
        <FlatList
          data={slides}
          keyExtractor={(s) => s.title}
          pagingEnabled
          // contentContainerStyle={{ height: "100%" }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Slide item={item} currentSlideIndex={currentSlideIndex} />
          )}
        />
        <View className="mt-9">
          <Btn
            onPressHandler={() => navigation.navigate("SignUp")}
            value="Sign Up"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="w-[90%] mx-auto bg-white py-2 rounded-[4px] mt-4"
          >
            <Text
              style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
              className="text-base text-center"
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;
