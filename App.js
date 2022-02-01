import {View, Text} from 'react-native';
import React from 'react';
import User from './src/screens/user';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/home';
import ItemDetails from './src/screens/itemDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
