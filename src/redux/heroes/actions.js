import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

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

export const initList = () => {
  return async (dispatch, getState) => {
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

      dispatch(updateList([...list, ...heroes], 40));
    } catch (error) {
      Alert.alert('Error', error.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
