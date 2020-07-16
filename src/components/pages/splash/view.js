import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

const ANIMATION_DELAY = 1000;
const NAVIGATION_DELAY = 2500;

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      Actions.replace('Heroes');
    }, NAVIGATION_DELAY);
  }, []);

  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomInUp"
        delay={ANIMATION_DELAY}
        resizeMode="contain"
        style={{width}}
        source={require('../../../assets/images/marvel-logo.png')}
      />
    </View>
  );
}
