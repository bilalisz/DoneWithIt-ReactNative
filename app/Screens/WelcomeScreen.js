import React from "react";
import { Image, ImageBackground, StyleSheet, View,Text, TouchableOpacity } from "react-native";
import color from "../../config/AppColor";
import ButtonComp from "../components/ButtonComp";
import TextBox from "../components/TextBox";

function WelcomeScreen(props) {



  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
       <View style={{...styles.logoContainer}}>
       <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
       <Text style={styles.slogn}>Sell what you don't need...</Text>
       </View>
       <View>
       <TextBox Ficon='user' placeholder='Username'/>
      <TextBox Eicon='email' placeholder='Email'/>
       </View>
      
      <View style={{
      width:"100%",
      justifyContent:'center',
      alignItems:'center',
      padding:10
    }}>
      <ButtonComp bg={color.primary} text={"Login"} onPress={()=>console.log("tapped")}/>
      <ButtonComp bg={color.secondary} text={"Register"} onPress={()=>console.log("register")}/>
    </View>
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:'center',
    
    
  
  },
  loginBtn: {
    width: "80%",
    height: 50,
    backgroundColor: color.primary,
    margin:10,
    borderRadius:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  loginTxt:{
    fontSize:20,
    color:'white'
  },
  registerBtn: {
    width: "80%",
    height: 50,
    backgroundColor: color.secondary,
    marginBottom:20,
    borderRadius:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  regTxt:{
    fontSize:20,
    color:"white"
  },

logoContainer:{
    position:'absolute',
    top:30
},
logo:{
        width:100,
        height:100,
        alignSelf:'center'
  },
  slogn:{
      color:'#000',
      fontWeight:"600",
      fontSize:18,
      paddingVertical:10
  }
});

export default WelcomeScreen;
