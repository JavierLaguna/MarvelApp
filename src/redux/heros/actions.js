import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const updateList = (list) => {
  return {
    type: types.UPDATE_LIST,
    payload: {list},
  };
};

export const setLoading = (loading) => {
  return {
    type: types.SET_LOADING,
    payload: {loading},
  };
};

export const fetchHeros = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await api.getHeros();
      const heros = response.data.data.results;

      dispatch(updateList(heros));
    } catch (error) {
      Alert.alert('Error', error.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
