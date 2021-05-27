import React from "react";
import { View } from "react-native";
import appColor from "../../config/AppColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Icon(props) {
  const {
    name,
    bgColor = appColor.primary,
    color = appColor.light,
    size = 40,
  } = props;
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size * 0.5} />
    </View>
  );
}

export default Icon;
