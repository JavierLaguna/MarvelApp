import React, {useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      Actions.replace('Heroes');
    }, 1000);
  }, []);

  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{width}}
        source={require('../../../assets/images/marvel-logo.png')}
      />
    </View>
  );
}
