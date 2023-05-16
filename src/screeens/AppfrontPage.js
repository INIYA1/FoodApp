import { View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AppfrontPage({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [seePassword, setSeePassword] = useState(true)
  const [checkvalidEmail, setCheckValidEmail] = useState(false)

const handleCheckEmail=(text)=>{
  let re = /\S+@\S+\.\S+/;
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  setEmail(text);
  if (re.test(text) || regex.test(text)) {
    setCheckValidEmail(false);
  } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ``
    setCheckValidEmail(true);
  }
};


const checkPasswordValidity = value => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return 'Password must not contain Whitespaces.';
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    return 'Password must have at least one Uppercase Character.';
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    return 'Password must have at least one Lowercase Character.';
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    return 'Password must contain at least one Digit.';
  }

  const isValidLength = /^.{8,16}$/;
  if (!isValidLength.test(value)) {
    return 'Password must be 8-16 Characters Long.';
  }
  return null;
};


const handleLogin =()=>{
  const checkPassowrd =checkPasswordValidity(password)
  if(!checkPassowrd){
    navigation.navigate('Home')
    
  
  } else {
    alert()
  }
   }
  

  return (

    <View style={{ flex: 1,backgroundColor:'white' }}>
       <ImageBackground source={{ uri: 'https://img.freepik.com/free-photo/blurred-dinning_1203-289.jpg?w=740&t=st=1683098093~exp=1683098693~hmac=fae7c197c6605a04e54baa411dbc2641659b11242f0d577c9b21dfadc599ff7e' }} style={{ flex: 1 }}> 
         <Text style={styles.text1} onPress={() => navigation.navigate('Appfrontpage')}>🍹 Foodia App 🥧</Text> 

        <View style={styles.text2} >
          <View >
            <Icons name='mail' size={25} color={'black'} margin={10} />
          </View>
          <TextInput style={{fontSize:18,fontWeight:'normal'}}
            placeholder='Email'
            value={email}
            onChangeText={(text)=>handleCheckEmail(text)}
            placeholderTextColor='black' 
            >

          </TextInput>
        </View>
         {checkvalidEmail ? <Text style={styles.warning}>undefined mail</Text> : <Text>

        </Text>} 
        <View style={styles.text3} >
        <View >
        <TouchableOpacity 
        onPress={()=>setSeePassword(!seePassword)}
        >
            <Icons name='eye-off'  size={25} color={'black'} margin={10} />
            </TouchableOpacity>
          </View>
          <TextInput 
            placeholder='Password'
            value={password}
            secureTextEntry={seePassword}
            onChangeText={text=> setPassword(text)}
            placeholderTextColor='black' />
        </View>
       
 
{ email == '' || password =='' || checkvalidEmail == true ?
<TouchableOpacity 
disabled
 style={styles.btnstyle} onPress={handleLogin}>
          
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>SIGN IN</Text>
          </TouchableOpacity>
: 
  <TouchableOpacity onPress={handleLogin} style={styles.btnstyle}> 
      <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' ,}}>SIGN IN</Text>
          </TouchableOpacity>
 } 
          <View style={styles.btnstyle1}>
          <Icons name="md-logo-google" size={25} color="red" marginRight={30}  />
          <Text style={{color:'red',fontSize:18}} borderLeftWidth= {1}>      Sign In With Google</Text>
            
          </View>
          <View style={styles.btnstyle2}>
          <Icon name="facebook" size={25} color="blue" marginRight={30}  />
          <Text style={{color:'blue',fontSize:18}} borderLeftWidth= {1}>     Sign In With Facebook</Text>
            
          </View>


         
      </ImageBackground>

  
    </View>
  )
}


const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    fontFamily: 'cursive',
    fontWeight: "bold",
    color: "black",
    alignSelf: 'center',
    margin: 20,
    // textDecorationLine: "underline",
  },
  text2: {
    backgroundColor: '#D3D3D3',
    height: 50,
    width: "80%",
    borderRadius: 10,
    
    alignItems: 'center',
    // alignSelf: 'center',
    //elevation: 10,
    textDecorationStyle:'dashed',
    textDecorationLine: 'underline',
    marginTop: 50,
    marginLeft: 50,
    flexDirection: 'row',
    // fontWeight:'bold',
    
    // color:'red'
  },
  text3: {
    backgroundColor: '#D3D3D3',
  
    height: 50,
    width: "80%",
    borderRadius: 10,
    alignItems: 'center',
    // textDecorationLine: 'underline',
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 150,
    flexDirection: 'row',
    fontSize: 18,
  },
  btnstyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    // opacity: 0.8,
    height:60,
    // margin:10
  

  },
  btnstyle1: {
    flexDirection:'row',
    backgroundColor: 'rgba(255, 170, 170, 0.3)',
    color: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    // opacity: 0.8,
    height:60,
    marginTop:100,
    
  },
  btnstyle2: {
    flexDirection:'row',
    backgroundColor: 'rgba(20, 174, 255 , 0.2)',
    // color: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    // opacity: 0.8,
    height:60,
    marginTop:50
    
    
  },
warning:{
  color:'red',
  fontSize:20,
  alignSelf:'center',
  marginTop:20

}


  
})



// import { View, Text } from 'react-native'
// import React from 'react'

// export default function AppfrontPage() {
//   return (
//     <View>
//       <Text>AppfrontPage</Text>
//     </View>
//   )
// }