import React from "react";

import color from "../../config/AppColor";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Icon from "./Icon";
import AppColor from "../../config/AppColor";

function ListItem(props) {
  const {
    image,
    title,
    subTitle,
    onPress,
    renderRightActions,
    bgColor,
    icon,
    iconColor,
    iconBG,
    iconSize,
  } = props;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={color.light}>
        <View style={{ ...styles.profileDetail, backgroundColor: bgColor }}>
          {(image && <Image style={styles.image} source={{ uri: image }} />) ||
            (icon && (
              <Icon
                name={icon}
                color={iconColor}
                bgColor={iconBG}
                size={iconSize}
              />
            ))}
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  profileDetail: {
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: color.medium,
  },
});

export default ListItem;
