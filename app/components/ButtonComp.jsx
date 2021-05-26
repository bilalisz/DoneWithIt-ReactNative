import React from 'react';
import { Text, TouchableOpacity, View,StyleSheet, Button } from 'react-native';



function ButtonComp(props) {
    const {bg,text,onPress}=props
    return (
       <TouchableOpacity style={{...styles.container,backgroundColor:bg}} onPress={onPress}>
           <Text style={styles.text}>{text}</Text>
       </TouchableOpacity>
    // <Button title={text} color={bg}/>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:50,
        borderRadius:30,
        margin:5
    },
    text:{
        fontSize:28,
        color:"#fff"
    }
})

export default ButtonComp;