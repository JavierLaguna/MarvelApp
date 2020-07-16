import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, Image, View} from 'react-native';
import styles from './styles';
import {selectHero} from '../../../redux/heroes/selectors';

export default function HeroDetail(props) {
  const hero = useSelector(selectHero);

  const imageSrc = {uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`};

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text>comics</Text>
        <Text>series</Text>
        <Text>stories</Text>
        <Text>events</Text>
      </View>
    </SafeAreaView>
  );
}
