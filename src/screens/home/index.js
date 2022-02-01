import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import profile from '../../assets/images/pngs/profile.png';
import Menu from '../../assets/images/svgs/menu.svg';
import FeatherIcon from 'react-native-vector-icons/Feather';
import cetegoryData from '../../assets/Data/categoryData';
import colors from '../../assets/colors/colors';
import popularData from '../../assets/Data/popularData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

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
            size={12}
            name="chevron-right"
            style={{color: item.id === 1 ? 'black' : 'white'}}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
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

        {/* categories */}
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

        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <TouchableOpacity activeOpacity={0.85} key={item.id}>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id === 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View style={styles.popularHeaderWrapper}>
                    <MaterialCommunityIcons
                      size={12}
                      style={styles.crown}
                      name="crown"
                    />
                    <Text style={styles.popularCardHeading}>
                      {item.heading}
                    </Text>
                  </View>
                  <Text style={styles.popularCardTitle}>{item.title}</Text>
                  <Text
                    style={
                      styles.popularCardWieght
                    }>{`Weight ${item.weight} gr`}</Text>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.popularAddIconWrapper}>
                      <FeatherIcon size={14} name="plus" />
                    </View>
                    <View style={styles.popularRatingWrapper}>
                      <Entypo name="star" size={12} />
                      <Text
                        style={
                          styles.popularCardRating
                        }>{`${item.rating}`}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularImageWrapper}>
                  <Image style={styles.popularItemImage} source={item.image} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
