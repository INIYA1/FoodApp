import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

export default function Checkbox() {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleCheckboxChange = () => {
    setSelection(!isSelected);
  };
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{flexDirection:'row',margin:10}}>
      <Icon name='chevron-back' size={30} color='#433489' marginTop={2} />
      <Text style={styles.text1}>BACK</Text>
      </View>
      <View>
        <Text style={styles.text2}>Food Profile</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        value={isSelected}
        onValueChange={handleCheckboxChange}
        tintColors={{ true: 'green', false: 'black' }}
      />
      <Text>My Checkbox</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <CheckBox
        value={isSelected}
        onValueChange={handleCheckboxChange}
        tintColors={{ true: 'green', false: 'black' }}
      />
      <Text>My Checkbox</Text>
      
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    text1:{
        marginTop:4,
        color:'#433489',
        fontWeight:'500',
        fontSize:20
    },
    text2:{
        fontSize:25,
        color:'black',
        fontWeight:'500',
        marginLeft:15
    }
})



  
import React, { useState } from 'react';
import { View, Text, CheckBox } from 'react-native';

const MyCheckbox = () => {
  const [isSelected, setSelection] = useState(false);

  const handleCheckboxChange = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        value={isSelected}
        onValueChange={handleCheckboxChange}
        tintColors={{ true: 'green', false: 'black' }}
      />
      <Text>My Checkbox</Text>
    </View>
  );
};



  
