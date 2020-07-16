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
});
