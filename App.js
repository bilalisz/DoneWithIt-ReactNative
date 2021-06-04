import React, { useState } from "react";
import {  StyleSheet } from "react-native";

import AppColor from './config/AppColor';
import RootScreen from './app/Screens/RootScreen';
import {LoginScreen,WelcomeScreen} from "./app/Screens";




export default function App() {
  const [screenChange,setScreenChange]=useState(false);
  console.log(screenChange)

 

  return (
    <RootScreen>
    {screenChange?<WelcomeScreen/>: <LoginScreen onChangeScreen={toggle=> setScreenChange(toggle)}/>}
     
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: AppColor.bgColor,
  },
});
