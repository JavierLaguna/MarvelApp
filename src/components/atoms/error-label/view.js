import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function ErrorLabel(props) {
  const {style, error} = props;

  if (error !== '') {
    return <Text style={{...styles.error, ...style}}>{error}</Text>;
  } else {
    return null;
  }
}

ErrorLabel.propTypes = {
  error: PropTypes.string,
  style: PropTypes.any,
};

ErrorLabel.defaultProps = {
  error: '',
  style: {},
};

export default ErrorLabel;
