import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppColor from '../../config/AppColor';

function PickerItem({lable,onPress}) {
    return (
       <TouchableOpacity onPress={onPress} >
           <Text style={styles.text}>{lable}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding:20,
        color:AppColor.yellow,
        opacity:1
    }
})

export default PickerItem;