import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ImageScreen from "./app/Screens/ImageScreen";
import Borders from "./app/Screens/BordersScreen";
import DeleteAction from "./app/components/DeleteAction";
import TimeLineScreen from "./app/Screens/TimeLineScreen";
import DetailCardScreen from "./app/Screens/DetailCardScreen";
import MessageScreen from "./app/Screens/MessageScreen";
import Constants from "expo-constants";
import RootScreen from "./app/Screens/RootScreen";
import color from "./config/AppColor";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppColor from "./config/AppColor";
import { Swipeable } from "react-native-gesture-handler";
import {
  getProfileData,
  getProfileDataByID,
} from "./app/services/fackservices";
import AccountScreen from "./app/Screens/AccountScreen";
import ProductListScreen from "./app/Screens/ProductListScreen";
import TextBox from "./app/components/TextBox";
export default function App() {
  // const [userName,setUserName]=useState([]);
  // const {landscape} =useDeviceOrientation();
  const [messageT, setMessageT] = useState(false);
  const { image } = getProfileDataByID(1);

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json => setUserName(json))
  // .catch(e=>console.log(e))
  // },[])

  return (
    <RootScreen>
      <WelcomeScreen />
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: color.bgColor,
  },
});
