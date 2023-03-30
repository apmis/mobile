import { Text } from "react-native";
import React from "react";
import { COLORS } from "./constants";

export const BoldText = ({ value = "Text" }) => {
  return (
    <Text
      style={{ fontFamily: "ManropeBold", color: COLORS.secondaryBlue }}
      className="text-2xl"
    >
      {value}
    </Text>
  );
};

export const LightText = ({
  value = "Text",
  textColor = COLORS.lightText,
  styling,
}) => {
  return (
    <Text
      className={styling}
      style={{ fontFamily: "ManropeRegular", color: textColor }}
    >
      {value}
    </Text>
  );
};
export const LightTextBase = ({ value = "Text" }) => {
  return (
    <Text
      className="text-base"
      style={{ fontFamily: "ManropeRegular", color: COLORS.lightText }}
    >
      {value}
    </Text>
  );
};
export const LightTextWhite = ({ value = "Text" }) => {
  return (
    <Text
      className="text-base"
      style={{ fontFamily: "ManropeRegular", color: "white" }}
    >
      {value}
    </Text>
  );
};

export const LightBlueText = ({
  value = "Text",
  color = COLORS.primaryBlue,
  styling,
}) => {
  return (
    <Text
      className={styling}
      style={{ fontFamily: "ManropeRegular", color: color }}
    >
      {value}
    </Text>
  );
};

export const Label = ({ value = "Label" }) => {
  return (
    <Text
      style={{ fontFamily: "ManropeRegular" }}
      className="text-base mb-2 text-black"
    >
      {value}
    </Text>
  );
};
export const LabelSmall = ({ value = "Label" }) => {
  return (
    <Text style={{ fontFamily: "ManropeRegular" }} className="mb-2 text-black">
      {value}
    </Text>
  );
};
