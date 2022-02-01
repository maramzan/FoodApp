import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.backgroundColor,
  },
  headerView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  headerBackIconWrapper: {
    borderColor: colors.textLight,
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStarIconWrapper: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStarIcon: {
    color: 'white',
  },
  titleWrapper: {
    paddingHorizontal: 20,

    marginTop: 30,
  },
  itemName: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textDark,
  },
  itemPrice: {
    color: colors.price,
    fontWeight: '600',
    fontSize: 32,
    marginTop: 10,
  },
  itemInfoWarpper: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  itmeInfoTitle: {
    color: colors.textLight,
    fontWeight: '500',
    marginTop: 20,
  },
  itemInfoValue: {
    color: colors.textDark,
    fontWeight: '600',
    marginTop: 5,
    fontSize: 16,
  },
  itemImageWrapper: {
    marginLeft: 30,
    paddingLeft: 20,
    overflow: 'hidden',
  },
  itemImage: {
    marginTop: 20,
    height: 176,
    width: 296,
  },
  ingrediantsWrapper: {
    paddingLeft: 20,
    marginTop: 45,
  },
  ingrediantsTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.textDark,
  },

  ingrediantsListWrapper: {
    marginTop: 20,
  },
  ingrediantsListItemWrapper: {
    backgroundColor: 'white',
    marginBottom: 10,
    height: 80,
    width: 100,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingrediantImage: {
    height: 80,
  },
  placeorderBtnWrapper: {
    marginTop: 40,
    backgroundColor: colors.primary,
    height: 62,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  placeorderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeorderTxt: {
    fontWeight: '700',
  },
  btnIcon: {
    color: colors.textDark,
    marginLeft: 10,
    marginTop: 2,
  },
});

export default styles;
