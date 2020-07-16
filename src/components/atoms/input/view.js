import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import colors from '../../../assets/colors';

function Input(props) {
  const {value, onChangeText, placeholder, label, style, error} = props;

  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.any,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  error: '',
  onChangeText: () => {},
  style: {},
};

export default Input;
