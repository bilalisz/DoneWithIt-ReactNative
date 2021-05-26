import React,{useState,useEffect} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {useDeviceOrientation,useDimensions} from '@react-native-community/hooks'
import WelcomeScreen from './app/Screens/WelcomeScreen';
import ImageScreen from './app/Screens/ImageScreen';
import Borders from './app/Screens/BordersScreen';

import TimeLineScreen from './app/Screens/TimeLineScreen';
import DetailCardScreen from './app/Screens/DetailCardScreen';
import MessageScreen from './app/Screens/MessageScreen';
import Constants from 'expo-constants'
import RootScreen from './app/Screens/RootScreen';
export default function App() {
 
  // const [userName,setUserName]=useState([]);
  // const {landscape} =useDeviceOrientation();


  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json => setUserName(json))
  // .catch(e=>console.log(e))
  // },[])


  return (
   
   <RootScreen>

     {/* <TimeLineScreen/>
      <DetailCardScreen/> */}
      <MessageScreen/>
   </RootScreen>
     
    //  <WelcomeScreen/>
    // <ImageScreen/>
    // <Borders/>
    
  
   
  );
}

const styles = StyleSheet.create({
  bodyContainer:{
  backgroundColor:"#f7f4f4",
  }
})
