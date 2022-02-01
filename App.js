import {View, Text} from 'react-native';
import React from 'react';
import User from './src/screens/user';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/home';
import ItemDetails from './src/screens/itemDetails';

const App = () => {
  return (
    <Provider store={store}>
      {/* <User /> */}
      {/* <Home /> */}
      <ItemDetails />
    </Provider>
  );
};

export default App;
