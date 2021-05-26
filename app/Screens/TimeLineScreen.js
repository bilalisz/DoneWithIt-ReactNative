import React from 'react';
import { View,StyleSheet, StatusBar,Platform } from 'react-native';
import CardComp from '../components/CardComp';
import { getItem } from '../services/fackservices';

function TimeLineScreen(props) {
    const itemData=getItem()
    return (
      <View style={styles.container}>
          {itemData.map(item=><View key={item.id}>
              <CardComp  image={item.url} title={item.description} subTitle={item.prices}/>
              </View>
              )}
        
          
          
          
         
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
     marginTop:20,
     marginBottom:5,
     padding:10
     
    }
})

export default TimeLineScreen;