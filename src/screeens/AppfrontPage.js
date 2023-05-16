import { View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/Ionicons';


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

    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/55/e0/99/55e0990c56a823904b78850f7daa77ca.jpg' }}
        style={{ flex: 1 }}>
        <Text style={styles.text1} onPress={() => navigation.navigate('Appfrontpage')}>🍹 Foodia App 🥧</Text>

        <View style={styles.text2} >
          <View >
            <Icons name='mail' size={25} color={'black'} margin={10} />
          </View>
          <TextInput style={{fontSize:18,fontWeight:'normal'}}
            placeholder='Email'
            value={email}
            onChangeText={(text)=>handleCheckEmail(text)}
            placeholderTextColor='black' >

          </TextInput>
        </View>
        {checkvalidEmail ? <Text style={styles.warning}>undefined mail</Text> : <Text>

        </Text>}
        <View style={styles.text3} >
        <View >
        <TouchableOpacity onPress={()=>setSeePassword(!seePassword)}>
            <Icons name={seePassword ? 'eye-off' :'eye'} size={25} color={'black'} margin={10} />
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
          
            <Text style={{ color: 'white', margin: 20, fontSize: 20, fontWeight: '800' }}>SUBMIT</Text>
          </TouchableOpacity>
:
  <TouchableOpacity

 style={styles.btnstyle} onPress={handleLogin}>
          
            <Text style={{ color: 'white', margin: 20, fontSize: 20, fontWeight: '800' }}>SUBMIT</Text>
          </TouchableOpacity>}

         
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    fontFamily: 'cursive',
    fontWeight: "bold",
    color: "white",
    alignSelf: 'center',
    margin: 30,
    textDecorationLine: "underline",
  },
  text2: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  
    height: 50,
    width: "80%",
    borderRadius: 10,
    alignItems: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 300,
    flexDirection: 'row',
    fontSize: 18,
  },
  btnstyle: {
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    opacity: 0.8

  },
warning:{
  color:'red',
  fontSize:20,
  alignSelf:'center',
  marginTop:20

}


  
})