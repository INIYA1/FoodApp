import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PassCode = ({ navigation }) => {
  const numbers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 0 },
  ];

  const [passcode, setPasscode] = useState(['', '', '', '']);
  const onPressNumber = (num) => {
    let tempCode = [...passcode];

    const firstEmptyIndex = tempCode.findIndex(code => code === '');
    if (firstEmptyIndex >= 0) {
      tempCode[firstEmptyIndex] = num.toString();
      setPasscode(tempCode);

      if (firstEmptyIndex === 3) {
        const passStr = tempCode.join('');
        if (passStr === '2526') {
          alert('Passcode correct!');
        } else {
          alert('Passcode incorrect!');
          setPasscode(['', '', '', '']);
        }
      }
    }
  };
  const onPressCancel = () => {
    let tempCode = [...passcode];
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      }

    }
    setPasscode(tempCode);
  }
  const handleEnter = (onPressNumber) => {
    if (onPressNumber) {
      navigation.navigate('Frontpage')
    }
  }



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image style={styles.imgStyle} source={{ uri: 'https://dqotsolutions.com/img/food-hero.png' }} />
      <Text style={styles.text1}> Welcome Foodia !</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 20 }}>
        {passcode.map((item, index) => {
          let style = item !== '' ? styles.circle2 : styles.circle1;
          return <View style={style} key={index} />;
        })}
        {/* <View style={styles.circle2}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle2}></View> */}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 20, justifyContent: 'center' }}>
        {numbers.map(num => (
          <TouchableOpacity style={styles.btnstyle} key={num.id} onPress={() => onPressNumber(num.id)}  >
            <Text style={styles.numStyle}> {num.id}</Text>
          </TouchableOpacity>

        ))}

      </View>
      <View style={styles.btnstyle1}>
        <TouchableOpacity onPress={handleEnter}>
          <Text style={styles.text3}>ENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCancel}>
          <Text style={styles.text3}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PassCode

const styles = StyleSheet.create({
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 25,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text1: {
    fontFamily: 'cursive',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 25,
    color: 'black'
  },
  circle1: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    margin: 5,
    // elevation:5
  },
  circle2: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    margin: 5,
    // elevation:5
  },
  btnstyle: {
    height: 80,
    width: 80,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    margin: 12,
    elevation: 5,
  },
  numStyle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'cursive'
  },
  btnstyle1:{
    flexDirection: 'row', 
    margin: 5,
    marginBottom: 50,
    justifyContent:'space-around',
  },
  text3:{
    fontSize:18,
    color:'black',
   
    
    
  }

})

