import React from 'react';
import { Alert, SafeAreaView, StyleSheet,View } from "react-native";
import AppColor from '../../config/AppColor';
import DeleteIconComp from '../components/DeleteAction';
import {ListItem,Icon,DeleteAction} from '../components';
import { getProfileDataByID } from '../services/fackservices';

const {image,title}=getProfileDataByID(1);

function AccountScreen(props) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <ListItem title={title} image={image} subTitle="bilalisz99@gmail.com"/>
        </View>
         <View style={styles.container}>
             <ListItem 
             title="My Listing" 
             onPress={()=>Alert.alert("Profile Data",JSON.stringify({image,title}))}
             icon='format-list-bulleted' 
             iconColor={AppColor.light}
             iconBG={AppColor.yellow}
             iconSize={50}
             renderRightActions={()=><DeleteIconComp name='clipboard-list-outline' iconBgColor={AppColor.medium}/>}
             />
             <ListItem 
             title="My Messages" 
             onPress={()=>Alert.alert("Profile Data",JSON.stringify({image,title}))}
             icon='message' 
             iconColor={AppColor.light}
             iconBG={AppColor.secondary}
             iconSize={50}
             renderRightActions={()=><DeleteIconComp name='message' iconBgColor={AppColor.medium}/>}
             />
         </View>
         <View style={styles.container}>
         <ListItem 
             title="Logout" 
             onPress={()=>Alert.alert("Logout","Are you sure ?",[{text:'No'},{text:'Confirm'}])}
             icon='logout' 
             iconColor={AppColor.light}
             iconBG={AppColor.primary}
             iconSize={50}
             
             />
         </View>
        </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        paddingHorizontal:10,
        backgroundColor:AppColor.white,
    
    }

})

export default AccountScreen;