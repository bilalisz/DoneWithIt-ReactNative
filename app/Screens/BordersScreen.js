import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import {LongText} from '../components';

function borders(props) {
    const text="this is I, working on react native app new updates this is I, working on react native app new updates"
    return (
       <View style={{
         flex:1,
           alignItems:'center',
           justifyContent:'center'
       }}>
           <TouchableOpacity style={{
               opacity:'0,5',
                 backgroundColor:'dodgerblue',
                 width:"auto",
                 height:"auto",
                 borderColor:'black',
                 borderRadius:50,
                 alignItems:'center',
                 justifyContent:'center',
                 padding:10,
                //  shadow will effect on IoS devices
                 shadowColor:'gray',
                 shadowOffset:{width:0,height:10},
                 shadowOpacity:1,
                //  for Android
                 elevation:20
                
           }}>
               <LongText title={text} onPress={(icon)=>Alert.alert("Title",text )}></LongText>
           </TouchableOpacity>

       </View>
    );
}

export default borders;