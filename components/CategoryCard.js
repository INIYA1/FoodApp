import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import cards from '../components/cards';




 export const CategoryCard=()=>{
    
  return(
  <View style={Styles.cardstyle}>
    <Text style={Styles.textStyle}>{"Name"}</Text>
    </View>    

    
)}


const Styles =StyleSheet.create({
    cardstyle:{
        backgroundColor:"green",
        height:150,
        width:100,
        borderRadius:8
    },
    textStyle:{
        color:"white",
        fontSize:12,
        fontWeight:"bold"
    }
})