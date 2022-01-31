import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  titleWrapper: {
    paddingTop: 30,
  },
  title: {
    // fontFamily: 'Montserrat-Regular',
  },
  subTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
    fontWeight: '700',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    flexGrow: 1,
    marginLeft: 10,
    padding: 2,
    color: colors.textLight,
  },
  categoryWrapper: {
    marginTop: 30,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
  },
  categoryListWrapper: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  categoryItemWrapper: {
    paddingTop: 24,
    backgroundColor: colors.primary,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  categoryItemImage: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    color: colors.textDark,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  categroyItemArrowWrapper: {
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 26,
    marginVertical: 20,
  },
});
