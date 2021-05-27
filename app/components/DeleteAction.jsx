import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import color from "../../config/AppColor";

function DeleteIconComp({ onPress,iconBgColor,name="delete" }) {
  return (
    <View style={{...styles.constainer,backgroundColor:iconBgColor}}>
      <MaterialCommunityIcons
        onPress={onPress}
        name={name}
        size={35}
        color={color.white}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
 
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteIconComp;
