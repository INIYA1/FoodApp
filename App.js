
// import NavigationComponent from "./NavigationComponent";
import { Provider } from "react-redux";
import store from './src/redux/store/cartStore';
import DrawerNavigation from './src/screeens/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native';
// import Firebase from '@react-native-firebase/app';


const App = () => {
  return (
   <Provider store={store}>
   <NavigationContainer >
   
   <DrawerNavigation/>
   </NavigationContainer>
      {/* <NavigationComponent/> */}
  </Provider>
  
  );
};

export default App;

