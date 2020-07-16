import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {},
  label: {
    marginLeft: 10,
    color: colors.main,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    color: colors.black,
    fontSize: 16,
    minHeight: 40,
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 10,
    borderColor: colors.main,
    borderWidth: 1,
    overflow: 'hidden',
  },
  error: {
    color: colors.tint,
    fontSize: 12,
    textAlign: 'right',
    marginTop: 6,
    fontWeight: '600',
  },
});
