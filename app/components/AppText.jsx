import React from 'react';
import { Text,StyleSheet } from 'react-native';

function AppText({text,color}) {
    return (
       <Text style={{...styles.text,color}} >{text}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:18,
    

    }
})

export default AppText;