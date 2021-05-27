import React from 'react';
import { SafeAreaView, View,StyleSheet, FlatList} from 'react-native';
import CardComp from '../components/CardComp';
import { getItem } from '../services/fackservices';
const products=getItem();
console.log(products)

function ProductListScreen(props) {
    return (
        <SafeAreaView style={{paddingHorizontal:10}}>
            <FlatList
            data={products}
            keyExtractor={product=>product.id.toString()}
            renderItem={({item})=><CardComp title={item.description} subTitle={item.prices} image={item.url}/>}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
})

export default ProductListScreen;