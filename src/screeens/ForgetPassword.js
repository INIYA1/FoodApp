import React from "react";
import{useState} from 'react';
import {View,Text,ImageBackground,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

const ForgetPassword=()=>{
    const[number,setNumber]=useState()
    var arr =[98,7,25,41,2,6]
    var res=arr.sort((a,b)=>(b-a))
    console.log(res)
    return(
        <View style={{flex:1,
        backgroundColor:"white"}}>
                    <ImageBackground source={{uri:'https://wallpaper.dog/large/20574662.jpg'}}
        style={{borderRadius:25,
      }}>
               <View style={Styles.brandView}>
                 <Text style={Styles.brandView}>Forget Password</Text>
                 <Text style={{color:'#C0C0C0',
                              fontSize:13,
                              marginBottom:50}} >Please enter your number</Text>
               </View>
            </ImageBackground>
            <View style={Styles.bottomView}>
            <View style={{padiing:40}}/>
            <View style={{marginTop:20}}>
            <TextInput style={{borderBottomWidth :1,
            borderBottomColor: '#000',}}
            placeholder="Enter Your Mobile Number"
            onChangeText={number => setNumber(number)}>
            </TextInput>
            
        <View>
        <TouchableOpacity>
          <Text style ={Styles.button}>SEND OTP</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity>
                <Text style ={Styles.account}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
       
       
        </View>
    )
}
export default ForgetPassword;
const Styles=StyleSheet.create({
    brandView:{
          color:'white',
          fontSize:30,
          fontWeight:'bold',
          fontFamily:'ebrima',
          alignItems:'center',
          marginTop:20
        },
        bottomView:{
            flex:1.5,
            backgroundColor:"white",
            bottom:50,
            borderTopStartRadius:20,
            borderTopEndRadius:20,


        },
        button:{
            color:"white",
            verticalAlign:"middle",
            backgroundColor:"#1EC1FF",
            fontWeight:'bold',
            fontSize:18,
            textAlign:'center',
            height:50,
            width: "95%",
            alignSelf: "center",
            borderRadius: 50, 
            marginTop:40
            
        },
        account:{
            color:"#1EC1FF",
            verticalAlign:"middle",
            backgroundColor:"#ECECEC",
            fontSize:15,
            textAlign:'center',
            height:50,
            width: "95%",
            alignSelf: "center",
            borderRadius: 50,
            marginTop: 20,
        },
    })