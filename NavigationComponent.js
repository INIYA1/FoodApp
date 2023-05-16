import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
import { CheckBox } from 'react-native-elements';
// import AuthScreen from './src/screeens/Authentication';
// import Payment from './src/screeens/Payment';
// import Cart from './src/screeens/Payment';
// import IntroPage from './src/screeens/IntroPage';
// import TapNavigation from './src/screeens/TapNavigation';
import Checkbox from './src/screeens/Checkbox';


// import LoginScreen from './src/screeens/Authentication';




const Stack = createNativeStackNavigator();
const NavigationComponent = () => {
    return (

        <NavigationContainer >
            <Stack.Navigator screenOptions={{ header: () => null }}>

                {/* <Stack.Screen name='Tabnavigation' component={TapNavigation} /> */}
                {/* <Stack.Screen name="Intro" component={IntroPage} /> */}
                {/* <Stack.Screen name='Paymnet' component={Cart} /> */}
               {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
               <Stack.Screen name='Checkbox' component={Checkbox} />
                <Stack.Screen name='Passcode' component={PassCode} />
                <Stack.Screen name="Frontpage" component={AppfrontPage} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Password" component={ForgetPassword} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name="Viewmore" component={ViewMore} />
                {/* <Stack.Screen name="Cart" component={Cart}/> */}
                <Stack.Screen name="Mycart" component={MyCartPage} />
                <Stack.Screen name="User" component={Userlogin} />
                <Stack.Screen name="API" component={Apintegration} />
                <Stack.Screen name='Flipcard' component={Flipcard} />
                <Stack.Screen name='Order' component={OrderPage} />


            </Stack.Navigator>
            {/* <Tab.Navigator>
                <Tab.Screen name ="Home" component={HomeScreen}/>
            </Tab.Navigator> */}
        </NavigationContainer>
        //   
    );
};

export default NavigationComponent;