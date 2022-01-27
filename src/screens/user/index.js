import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';

// Icon.loadFont();
const User = () => {
  return (
    <View>
      <Icon name="arrow-down" size={30} />
      <Text style={{fontFamily: 'Montserrat-Regular', color: colors.secondary}}>
        Hello this is user screen
      </Text>
    </View>
  );
};

export default User;
