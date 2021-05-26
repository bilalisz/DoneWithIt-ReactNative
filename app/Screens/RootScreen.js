import React from 'react';
import { View,StyleSheet } from 'react-native';
import Constants from 'expo-constants'


function RootScreen({children}) {
    console.log(Constants)
    return (
        <View style={styles.screen}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#f7f4f4",
        marginTop:Constants.statusBarHeight
    }
})
export default RootScreen;