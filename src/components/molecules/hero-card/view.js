import React, {useEffect} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function HeroCard(props) {
  const {hero, onPress} = props;

  const imageSrc = {uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`};

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress(hero);
      }}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.title}>{hero.name}</Text>
    </TouchableOpacity>
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
