import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import * as heroesActions from '../../../redux/heroes/actions';
import {
  selectHeroes,
  selectLoading,
  selectTotal,
} from '../../../redux/heroes/selectors';
import {HeroCard} from '../../molecules';
import colors from '../../../assets/colors';
import {Actions} from 'react-native-router-flux';

export default function Heroes(props) {
  const dispatch = useDispatch();

  const heroes = useSelector(selectHeroes);
  const total = useSelector(selectTotal);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    initHeroesList();
  }, []);

  const initHeroesList = () => {
    dispatch(heroesActions.initList());
  };

  const onSelectHero = (hero) => {
    dispatch(heroesActions.setItem(hero));
    Actions.push('HeroDetail', {title: hero.name});
  };

  const renderListItem = ({item}) => (
    <HeroCard hero={item} onPress={onSelectHero} />
  );

  const onEndReached = () => {
    if (!loading && heroes.length < total) {
      dispatch(heroesActions.fetchHeroes());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={heroes}
        keyExtractor={(item) => `hero-${item.name}`}
        renderItem={renderListItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            colors={[colors.tint]}
            tintColor={colors.tint}
            onRefresh={initHeroesList}
          />
        }
        onEndReachedThreshold={1}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
}
