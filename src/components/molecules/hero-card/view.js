import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function HeroCard(props) {
  const {hero} = props;

  const imageSrc = {uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`};

  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.title}>{hero.name}</Text>
    </View>
  );
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

HeroCard.defaultProps = {
  onPress: () => {},
};

export default HeroCard;
