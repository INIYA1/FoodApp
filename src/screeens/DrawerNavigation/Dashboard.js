import { View, Text,Image,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'

export default function Dashboard() {
  return (
    <View  >
 
    <ImageBackground imageStyle={{borderRadius:5}} style={{height:"70%",width:"98%",alignSelf:"center",marginTop:20,}} source={{uri:"https://media.istockphoto.com/id/1372798518/photo/gourmet-goose-burger-on-gray-surface-with-brown-background.jpg?b=1&s=170667a&w=0&k=20&c=VTy54dm6H-alm_2DmnTv6Xjh0F6dxbTiRU8BJ77RQOI="}}>
    <Text style={{marginTop:10,fontFamily:'cursive',fontSize:25,fontWeight:'800',color:'white',justifyContent:'center',alignSelf:'center'}}>Welcome Foodia App</Text>
</ImageBackground>

      <View style={styles.card}>

      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        height:60,
        width:40,
        backgroundColor:'white'
    }
})