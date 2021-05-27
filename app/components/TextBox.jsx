import React from "react";
import { TextInput, View, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AppColor from "../../config/AppColor";

function TextBox(props) {
  const { Ficon, Eicon, ...rest } = props;
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={styles.container}>
        {(Ficon && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FontAwesome5 name={Ficon} size={25} color={AppColor.medium} />
          </View>
        )) ||
          (Eicon && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Entypo name={Eicon} size={25} color={AppColor.medium} />
            </View>
          ))}
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          {...rest}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 25,
    backgroundColor: AppColor.light,
    padding: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    width: "100%",
  },
});
export default TextBox;
