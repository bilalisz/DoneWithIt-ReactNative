import React from 'react';
import { Text,Platform,StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


function LongText(props) {
    const {title, onPress}=props
    const txtIcon=<FontAwesome color="black" size={18} name="file-text-o"/>
    return (
      <Text style={styles.text} onPress={()=>onPress(txtIcon)}>{title} {txtIcon}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontStyle:'normal',        
        textAlign:'auto',
        color:'orange',
        margin:10
    }
})

export default LongText;