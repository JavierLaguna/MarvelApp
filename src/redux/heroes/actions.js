import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

export const updateList = (list, total) => {
  return {
    type: types.UPDATE_LIST,
    payload: {list, total},
  };
};

export const setLoading = (loading) => {
  return {
    type: types.SET_LOADING,
    payload: {loading},
  };
};

export const setItem = (item) => {
  return {
    type: types.SET_ITEM,
    payload: {item},
  };
};

export const initList = () => {
  return async (dispatch, getSxtate) => {
    dispatch(updateList([], 0));
    dispatch(fetchHeroes());
  };
};

export const fetchHeroes = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const {list} = getState().heroes;
      const params = {
        offset: list.length,
      };

      const response = await api.getHeroes(params);
      const heroes = response.data.data.results;
      const {total} = response.data.data;

      dispatch(updateList([...list, ...heroes], total));
    } catch (error) {
      errorOccurred(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const createHero = (data) => {
  return async (dispatch, getState) => {
    try {
      const {list, total} = getState().heroes;

      dispatch(setLoading(true));

      const newHero = await api.postHero(data);

      dispatch(updateList([...[newHero], ...list], total + 1));

      Alert.alert('Great', `${newHero.name} created!`, [
        {text: 'Accept', onPress: Actions.pop},
      ]);
    } catch (error) {
      errorOccurred(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

function errorOccurred(error = null) {
  Alert.alert(
    'Ups!',
    error.message || 'An error has occurred, try again in a few minutes',
  );
}
