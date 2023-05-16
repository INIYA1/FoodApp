import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppfrontPage from './src/screeens/AppfrontPage';
import HomeScreen from './src/screeens/HomeScreen';
import SigninScreen from './src/screeens/SigninScreen';
import ForgetPassword from './src/screeens/ForgetPassword';
import ViewMore from './src/screeens/ViewMore';
import Products from './src/redux/Products';
import MyCartPage from './src/redux/myCartPage';
import Userlogin from './src/screeens/userlogin';
import Apintegration from './src/screeens/Apintegration';
import Flipcard from './src/screeens/Flipcard';
import PassCode from './src/screeens/PassCode';
import OrderPage from './src/screeens/OrderPage';
import FireBase from './src/screeens/FireBase';
import Dashboard from './src/screeens/DrawerNavigation/Dashboard';



const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function NavigationComponent () {
    return(
    

       
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name='Passcode' component={PassCode} />
                <Stack.Screen name="fireBase" component={FireBase} />
                <Stack.Screen name="Frontpage" component={AppfrontPage} />
                
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Password" component={ForgetPassword} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name="Viewmore" component={ViewMore} />
               
                <Stack.Screen name="User" component={Userlogin} />
                <Stack.Screen name="API" component={Apintegration} />
                <Stack.Screen name='Flipcard' component={Flipcard} />
                <Stack.Screen name='Order' component={OrderPage} />
            </Stack.Navigator>
)
};



export default NavigationComponent