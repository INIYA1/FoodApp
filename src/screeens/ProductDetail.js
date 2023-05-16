import React,{useState,useEffect} from 'react';
import {View,Text,ImageBackground,SafeAreaView,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Star from 'react-native-vector-icons/AntDesign';
import Truck from 'react-native-vector-icons/MaterialCommunityIcons'
import productlist from './productlist';



const ProductDetail=({ navigation })=>{

     const[count,setCount]=useState(0)




    return(

    
       <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}>
       <View style={{flexDirection:"row"}}>
        {productlist.map((dlist,index)=>(
           <View key={index}>
                <ImageBackground style={{height:260,width:429}} source={dlist.img}>
                 <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <Icons name="md-chevron-back" size={25} color="white"
                        onPress={() => navigation.navigate("Viewmore")} />
                    <Text style={{ color: "#11547d", fontSize: 19, fontWeight: "500",color:"white"}}> Product Detail</Text>
                    <Icons name="md-heart" size={25} color="white" style={{marginLeft:230}}/>
                 </View>
                </ImageBackground>
            </View>
          ))}
       </View>
       </ScrollView>

       <View style={{flex:1,marginBottom:100}}>
        <Text style={{color:"#4f658b", fontSize:25,fontWeight:"500"}}> Chicken Briyani</Text>
        <Text style={{marginTop:5,margin:10}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
       </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",}}> 
        <Star  name="star" size={25} color="#FFA902">
        <Text style={{fontWeight:"400",fontSize:20,marginRight:150,color:"#4f658b"}}> 4.5</Text>
        </Star>
        

        <View >
        <Star  name="clockcircle" size={20} color="#6c757d">
            <Text style={{fontSize:17,color:"#4f658b",fontWeight:"500"}}> 6-7 Min </Text>
        </Star>
        </View>

        <View>
        <Truck name="truck-minus" size={29} color="#84CA93">
            <Text style={{fontSize:17,fontWeight:"600"}}> FREE DELIVERY </Text>
        </Truck>
        </View>
    </View>
       
       <View>
       <Text style={{fontSize:20,margin:10}}>Price</Text>
       </View>
            
            
            <View style={{flexDirection:"row",}}>
                <Text style={{fontWeight:'bold',fontSize:25,color:"#4f658b",margin:1}}> $5.8</Text>
                
                
                    <TouchableOpacity onPress={()=>
                    setCount(count -1)
                    }>
                    <Text style={Styles.roundBtn}> - </Text>
                    </TouchableOpacity>
                   

              <Text style={{fontSize:23,marginLeft:20}}>{count}</Text>
             
                
                    <TouchableOpacity onPress={()=>
                    setCount(count +1)}>
                    <Text style={Styles.roundBtn1}> + </Text></TouchableOpacity>
                    
                    </View>
                 
                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={Styles.textStyle}> 20% OFF DISCOUNT</Text>
                    <Text style={{marginTop:20,marginRight:10,fontSize:18,color:"#42A7E5",marginRight:20}}> Apply promo code</Text>
                 </View>
           
           <View>
           <TouchableOpacity>
                <Text style ={Styles.account}>
                <Icons name="cart" size={23} />  PLACE ORDER</Text>
            </TouchableOpacity>
           </View>

   
                 
      
        </SafeAreaView>
    )
}
export default ProductDetail

const Styles= StyleSheet.create({
    roundBtn:{
    
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth:1,
    borderColor:"#ececec",
    backgroundColor:'white',
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold",
    marginLeft:200
    },
    roundBtn1:{
    
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth:1,
        borderColor:"#ececec",
        backgroundColor:'white',
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        marginLeft:30,
        color:"#4f658b"
    },
    textStyle:{
        marginTop:25,
        borderRadius:5,
    width:150,
        height:20,
        textAlign:"center",
        backgroundColor:"#f75a5b",
        color:"white",
        marginLeft:10
    },
    account:{
        fontWeight:"bold",
        color:"#1EC1FF",
        verticalAlign:"middle",
        color:"white",
        fontSize:15,
        textAlign:'center',
        height:40,
        width: "90%",
        alignSelf: "center",
        borderRadius: 25,
        backgroundColor:"#42A7E5",
    marginTop:50,
marginBottom:20 }
})