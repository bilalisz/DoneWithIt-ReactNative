import React from 'react';
import { Button, FlatList, Modal, Text } from 'react-native';
import PickerItem from './PickerItem';

function AppModal({isVisible,onBtnPress,items,onSelected}) {
    return (
        <Modal visible={isVisible} animationType='slide'>
          <FlatList
          data={items}
          keyExtractor={(item)=>item.value.toString()}
          renderItem={({item})=><PickerItem lable={item.lable} onPress={()=>{
            onBtnPress(!isVisible)  
            onSelected(item)
          }} />}
          />
           <Button title='Close' onPress={onBtnPress}/>
        </Modal>
    );
}

export default AppModal;