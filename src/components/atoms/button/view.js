import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import colors from '../../../assets/colors';

function Button(props) {
  const {style, label, onPress, loading} = props;

  return (
    <TouchableOpacity
      style={{...styles.button, ...style}}
      onPress={loading ? null : onPress}>
      <Text style={styles.label}>{label}</Text>
      {loading && (
        <ActivityIndicator color={colors.white} style={styles.loading} />
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  style: PropTypes.any,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  style: {},
  onPress: () => {},
};

export default Button;
