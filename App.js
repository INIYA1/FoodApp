import React from "react";
import NavigationComponent from "./NavigationComponent";
// import { Provider } from "react-native-paper";
import { Provider } from "react-redux";
// import MyStore2 from './src/redux/store/MyStore2'
import store from './src/redux/store/cartStore'

const App = () => {
  return (
   <Provider store={store}>
      <NavigationComponent/>
   </Provider>
  
  );
};

export default App;
