import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  label: {
    textAlign: 'center',
    color: colors.main,
    fontWeight: '500',
  },
});
