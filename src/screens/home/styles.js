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
});
