import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import color from "../../config/color";
function CardComp({ image, title, subTitle, borderRadius=20,marginTop=20 }) {
  return (
    <View style={{...styles.card,borderRadius,marginTop}}>
     {image ? <Image style={styles.image} source={{ uri: image }}/>:<ActivityIndicator
      style={styles.loader}
      size="small"
      color="#0000ff"
    />}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>$ {subTitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingBottom:10,
    overflow:"hidden",
    // shadowColor:'gray',
    // shadowOpacity:1,
    // shadowOffset:{width:10,height:10},
    elevation:10
   
  },
  image: {
    width: "100%",
    height: 300,
  },
  titleWrapper:{
    padding:20
  },
  title:{
    fontSize:20,
    fontWeight:"600"
  },
  subTitle:{
    fontSize:18,
    color:color.secondary
  },
  loader:{ 
      justifyContent: "center", 
      alignItems: "center" 
    }
});
export default CardComp;

{
  /* <View style={styles.container}>
<TouchableOpacity style={styles.cardWrapper}
onPress={()=>console.log(props.url)}
>
  {props.url ? (
    <Image
      resizeMode="cover"
      style={styles.image}
      source={{ uri: props.url, width: "100%", height: 200 }}
    />
  ) : (
    <ActivityIndicator
      style={{ justifyContent: "center", alignItems: "center" }}
      size="small"
      color="#0000ff"
    />
//     <Image
//     resizeMode="cover"
//     style={styles.image}
//     source={require('../assets/loading.png')}
//   />
  )}
  </TouchableOpacity>
  <View style={styles.detailContent}>
    <Text style={{ fontSize: 18 }}>{props.description}</Text>
    <Text style={{ color: color.secondary, paddingVertical: 10 }}>
      $ {props.prices}
    </Text>
  </View>

</View>
);
}
const styles = StyleSheet.create({
container: {
backgroundColor: "rgb(247,244,244)",
justifyContent: "center",
alignItems: "center",
paddingTop: 10,
paddingBottom: 10,
borderRadius: 25,
width:"100%",


},
cardWrapper: {
backgroundColor: "#fff",

},

detailContent: {
padding: 10,
},
}); */
}
