import React from 'react';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'
import color from '../../config/AppColor';
import AppColor from '../../config/AppColor';


function RootScreen({children}) {
 
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:AppColor.bgColor,
        marginTop:Constants.statusBarHeight
    }
})
export default RootScreen;