import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

export const getHeroes = (params) => {
  const stringParmas = qs.stringify({...API_KEY, ...params}, {skipNulls: true});
  const url = `/v1/public/characters?${stringParmas}`;

  return instance.get(url);
};
