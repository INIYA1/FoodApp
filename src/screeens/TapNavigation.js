import { View, Text } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';


const TapNavigation =() =>{
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name ="Home" component={HomeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TapNavigation;