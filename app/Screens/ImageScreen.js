import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import color from "../../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <TouchableOpacity
        onPress={() => console.log("tapped")}
        style={styles.addIcon}
      >
        <Ionicons name="close-outline" size={35} color={"#fff"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("tapped delete")}
        style={styles.deleteIcon}
      >
        <MaterialCommunityIcons
          selectionColor="red"
          name="delete-outline"
          size={35}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 25,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.secondary,
    borderRadius: 20,
  },
  deleteIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 25,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 20,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 10,
  },
});
export default ImageScreen;
