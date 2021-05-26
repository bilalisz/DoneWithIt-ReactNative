import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import color from '../../config/color';
import CardComp from '../components/CardComp';
import ShortProfile from '../components/ShortProfile';
import { getItemById } from '../services/fackservices';


function DetailCardScreen(props) {
   const item= getItemById(1)
    return (
      <View>
           <CardComp  
           image={item.url} title={item.description} subTitle={item.prices}
           borderRadius={0}
           marginTop={0}
           />
           <View style={styles.seperater}/>
          <ShortProfile title="Muhammad Bilal Khan" subTitle="11 listing" image="https://pbs.twimg.com/profile_images/1350007502214209537/c7VRgZ_w_400x400.jpg"/>
          
      </View>
    );
}
const styles = StyleSheet.create({
   
    seperater:{
        width:'100%',
        height:1,
        backgroundColor:"#d7d7d7"
    }
})

export default DetailCardScreen;