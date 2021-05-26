import React from "react";
import { View, StyleSheet,TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../../config/color";

function DeleteIconComp({onPress}) {
  return (
    <View 
    style={styles.constainer}
   
    >
      <Ionicons onPress={onPress} name="trash-outline" size={35} color={color.white} />
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    backgroundColor: color.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteIconComp;
