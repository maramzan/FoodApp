import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import pizza1 from '../../assets/images/pngs/pizza1.png';
import ingrediantsData from '../../assets/Data/ingrediantsData';

const ItemDetails = () => {
  console.log({ingrediantsData});

  const renderItem = ({item}) => {
    const {Image} = item;
    return (
      <View
        style={[
          styles.ingrediantsListItemWrapper,
          {marginLeft: item.id == 1 ? 0 : 20},
        ]}>
        <Image style={styles.ingrediantImage} />
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerView}>
          <View style={styles.headerBackIconWrapper}>
            <FeatherIcon size={12} name="chevron-left" />
          </View>
          <View style={styles.headerStarIconWrapper}>
            <Entypo name="star" size={12} style={styles.headerStarIcon} />
          </View>
        </View>

        {/* title and price */}
        <View style={styles.titleWrapper}>
          <Text style={styles.itemName}>Primavera</Text>
          <Text style={styles.itemName}>Pizza</Text>
          <Text style={styles.itemPrice}>{`$5.99`}</Text>
        </View>

        {/* item related info */}
        <View style={styles.itemInfoWarpper}>
          <View>
            <Text style={styles.itmeInfoTitle}>Size</Text>
            <Text style={styles.itemInfoValue}>{`Medium 14"`}</Text>
            <Text style={styles.itmeInfoTitle}>Crust</Text>
            <Text style={styles.itemInfoValue}>Thin Crust</Text>
            <Text style={styles.itmeInfoTitle}>Delivery Time</Text>
            <Text style={styles.itemInfoValue}>{`30 min`}</Text>
          </View>
          <View style={styles.itemImageWrapper}>
            <Image source={pizza1} style={styles.itemImage} />
          </View>
        </View>

        {/* ingirdiants  */}
        <View style={styles.ingrediantsWrapper}>
          <Text style={styles.ingrediantsTitle}>Ingredients</Text>
          <View style={styles.ingrediantsListWrapper}>
            <FlatList
              horizontal={true}
              data={ingrediantsData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* place order button */}
        <TouchableOpacity style={styles.placeorderBtnWrapper}>
          <View style={styles.placeorderBtn}>
            <Text style={styles.placeorderTxt}>Place an order</Text>
            <FeatherIcon
              size={16}
              name="chevron-right"
              style={styles.btnIcon}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ItemDetails;
