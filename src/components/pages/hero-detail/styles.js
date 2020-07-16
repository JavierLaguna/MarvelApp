import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  image: {
    width: '100%',
    height: 350,
  },
  infoContainer: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.main,
  },
  description: {
    fontSize: 16,
    color: colors.main,
    marginVertical: 10,
  },
  accordion: {
    marginVertical: 6,
  },
  itemText: {
    fontSize: 14,
    color: colors.main,
  },
});
