import {View, Text} from 'react-native';
import React from 'react';
import User from './src/screens/user';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
};

export default App;
