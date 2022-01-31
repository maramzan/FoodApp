import {View, Text, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import profile from '../../assets/images/pngs/profile.png';
import Menu from '../../assets/images/svgs/menu.svg';
import FeatherIcon from 'react-native-vector-icons/Feather';
import cetegoryData from '../../assets/Data/categoryData';
import colors from '../../assets/colors/colors';

const Home = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const renderItem = ({item}) => {
    const {Image} = item;
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.id === 1 ? colors.primary : 'white',
            marginLeft: item.id === 1 ? 0 : 20,
          },
        ]}>
        <Image style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categroyItemArrowWrapper,
            {
              backgroundColor: item.id === 1 ? 'white' : colors.secondary,
            },
          ]}>
          <FeatherIcon
            size={8}
            name="chevron-right"
            style={{color: item.id === 1 ? 'black' : 'white'}}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Image style={styles.profileImage} source={profile} />
        <Menu />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Food</Text>
        <Text style={styles.subTitle}>Delivery</Text>
      </View>
      <View style={styles.searchWrapper}>
        <FeatherIcon name="search" size={16} />
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchTxt}
          value={searchTxt}
          placeholder="Search..."
        />
      </View>
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryTitle}>Category</Text>
        <View style={styles.categoryListWrapper}>
          <FlatList
            horizontal={true}
            data={cetegoryData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
