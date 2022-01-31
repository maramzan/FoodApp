import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import profile from '../../assets/images/pngs/profile.png';
import Menu from '../../assets/images/svgs/menu.svg';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Image style={styles.profileImage} source={profile} />
        <Menu />
      </View>
    </View>
  );
};

export default Home;
