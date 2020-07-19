import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function HeroCard(props) {
  const {hero, onPress} = props;

  const imagePath = hero.thumbnail.extension
    ? `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    : hero.thumbnail.path;
  const imageSrc = {uri: imagePath};

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress(hero);
      }}>
      <Text style={styles.title}>{hero.name}</Text>
      <Image source={imageSrc} style={styles.image} />
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
