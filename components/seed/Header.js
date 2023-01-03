import { View, Text } from "react-native";
import Backbtn from "./Backbtn";

const Header = ({ title }) => {
  return (
    <View className="relative mt-5 ">
      <Backbtn />
      <Text
        style={{ fontFamily: "ManropeSemibold" }}
        className="text-base text-center text-[#070C18]"
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
