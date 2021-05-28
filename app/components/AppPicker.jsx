import React,{useState} from "react";
import { TextInput, View, StyleSheet, SafeAreaView, Text, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppColor from "../../config/AppColor";
import AppModal from "./AppModal";

function AppPicker(props) {
    const [isvisible, setIsVisible] = useState(false);
   
  const { items,placeholder, icon, selectedItem,onSelected } = props;
  return (
   <>
   <TouchableWithoutFeedback onPress={()=>setIsVisible(true)}>
   <SafeAreaView style={{ margin: 10 }}>
      <View style={styles.container}>
        {(icon && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons name={icon} size={25} color={AppColor.medium} />
          </View>
        )) }
        <Text
          style={styles.text}
        >{selectedItem?selectedItem.lable:placeholder}</Text>
      <MaterialCommunityIcons name="chevron-down"  size={20} color={AppColor.medium} />
      </View>
    </SafeAreaView>
   </TouchableWithoutFeedback>
   <AppModal 
   isVisible={isvisible} 
   onBtnPress={()=>setIsVisible(!isvisible)}
   items={items}
   onSelected={onSelected}
   />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: AppColor.light,
    padding: 10,
  },
  text: {
      flex:1,
    paddingHorizontal: 10,
    width: "100%",
  },
});
export default AppPicker;
