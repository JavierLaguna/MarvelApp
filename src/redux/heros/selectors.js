import {createSelector} from 'reselect';
import {initialState} from './reducer';

const selectReducer = (state) => state.heros || initialState;

export const selectHeros = createSelector(selectReducer, (state) => state.list);
export const selectLoading = createSelector(
  selectReducer,
  (state) => state.loading,
);
