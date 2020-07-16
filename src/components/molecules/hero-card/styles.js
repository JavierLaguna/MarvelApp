import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.tint,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 240,
  },
  title: {
    backgroundColor: colors.mainBackground,
    textAlign: 'center',
    color: colors.tint,
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 6,
    flex: 1,
  },
});
