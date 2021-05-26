import {StyleSheet,Platform, StatusBar} from 'react-native';

export const styles=StyleSheet.create({
    container: {
       flex:1,
       
        width:'100%',
        height:"100%",
        backgroundColor: 'dodgerblue',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0,
        // padding:10
        
      },
      button:{
          color:"blue",
          display:"none"
      },
      viewWrapper:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        height:"100%",
        backgroundColor: 'dodgerblue',
        padding:10,
        
      }
})