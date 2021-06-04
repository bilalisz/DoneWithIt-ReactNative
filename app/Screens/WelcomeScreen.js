import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";


import AppColor from "../../config/AppColor";

import {AppButton,TextBox} from "../components";


function WelcomeScreen(props) {
  const [text, setText] = useState("");

  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.backIcon}><Text>back</Text></View>
      <View style={{ ...styles.logoContainer }}>  
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.slogn}>Sell what you don't need...</Text>
      </View>
      <View style={styles.inputTextContainer}>
        <Text>{text}</Text>
        <TextBox Ficon="user" placeholder="Username" name={"username"} />
        <TextBox Eicon="email" placeholder="Email" />
      </View>

      <View style={styles.btnContainer}>
        <AppButton
          bg={AppColor.primary}
          text="Login"
          onPress={() => console.log("tapped")}
        />
        <AppButton
          bg={AppColor.secondary}
          text="Register"
          onPress={() => console.log("register")}
        />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  
  logoContainer: {
    position: "absolute",
    top: 30,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  slogn: {
    color: "#000",
    fontWeight: "600",
    fontSize: 18,
    paddingVertical: 10,
  },
inputTextContainer:{


},


  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding:10,
  },
  backIcon:{

  }

});

export default WelcomeScreen;
