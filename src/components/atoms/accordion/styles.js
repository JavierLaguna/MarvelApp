import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 8,
  },
  icon: {
    width: 12,
    height: 18,
  },
  divider: {
    height: 1,
    width: '100%',
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 6,
    marginTop: 6,
  },
});
