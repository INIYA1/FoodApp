import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import MyCartPage from '../redux/myCartPage';
import Dashboard from './DrawerNavigation/Dashboard';
import NavigationComponent from '../../NavigationComponent'
import SigninScreen from './SigninScreen';
// import { Text } from 'react-native-elements';
// import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
    return (
<View style={{flex:1}}>

   
        <Drawer.Navigator initialRouteName='FOODIA APP'>
      
        <Drawer.Screen name="FOODIA APP" component={Dashboard} />
        <Drawer.Screen name="Home" component={NavigationComponent} />
        <Drawer.Screen name="Login" component={HomeScreen} />
        <Drawer.Screen name="Signin" component={SigninScreen} />
        <Drawer.Screen name="Mycart" component={MyCartPage} />
        {/* <Drawer.Screen name= 'Navigation' component={NavigationComponent} /> */}
            
        </Drawer.Navigator>
        
        </View>
      

    );
}
export default DrawerNavigation;
