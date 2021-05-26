import React from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import color from "../../config/color";

function ShortProfile({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={color.secondary}>
      <View style={styles.profileDetail}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  profileDetail: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#000",
  },
  textWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: color.medium,
  },
});

export default ShortProfile;
