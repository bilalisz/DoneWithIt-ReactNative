import React from 'react';
import { View,  } from 'react-native';

function AppSeparator({color}) {
    return (
       <View style={{width:'100%',height:1,backgroundColor:color}}/>
    );
}

export default AppSeparator;