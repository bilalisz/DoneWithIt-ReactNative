import React from 'react';
import { Text, TouchableOpacity,StyleSheet  } from 'react-native';



function AppButton(props) {
    const {bg,title,onPress}=props
    console.log(title)
    return (
       <TouchableOpacity style={{...styles.container,backgroundColor:bg}} onPress={onPress}>
           <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
   
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:50,
        borderRadius:30,
       
    },
    text:{
        fontSize:28,
        color:"#fff"
    }
})

export default AppButton;