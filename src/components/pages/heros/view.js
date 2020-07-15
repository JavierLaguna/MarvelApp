import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import * as herosActions from '../../../redux/heros/actions';
import {selectHeros, selectLoading} from '../../../redux/heros/selectors';
import {HeroCard} from '../../molecules';
import colors from '../../../assets/colors';

export default function Heros(props) {
  const dispatch = useDispatch();

  const heros = useSelector(selectHeros);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(herosActions.fetchHeros());
  }, []);

  const renderListItem = ({item}) => <HeroCard hero={item} />;

  const onEndReached = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={heros}
        keyExtractor={(item) => `hero-${item.id}`}
        renderItem={renderListItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            colors={[colors.white]}
            tintColor={colors.white}
            onRefresh={() => {}}
          />
        }
        onEndReachedThreshold={0.8}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
}
