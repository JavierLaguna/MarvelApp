import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import styles from './styles';
import arrowIcon from '../../../assets/images/arrow-down.png';

export default function Accordion({
  children = null,
  headerStyles = {},
  iconStyles = {},
  open = false,
  renderHeader = () => null,
  showIcon = true,
  showSeparatorLine = true,
  style = {},
}) {
  const [expanded, setExpanded] = useState(open);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const spinValue = new Animated.Value(0);
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const rotateUp = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateDown = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View style={[styles.header, headerStyles]}>
          {renderHeader()}

          {showIcon && (
            <Animated.Image
              style={{
                ...styles.icon,
                ...iconStyles,
                transform: [{rotate: expanded ? rotateUp : rotateDown}],
              }}
              source={arrowIcon}
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      {showSeparatorLine && <View style={styles.divider} />}

      {expanded && children}
    </View>
  );
}
