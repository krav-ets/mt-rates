import axios from 'axios';
import { KORONA_URL, UNISTREAM_URL, KORONA_PARAMS, UNISTREAM_PARAMS } from './constant';

const systems = {
  korona: {
    method: 'get',
    url: KORONA_URL,
    defaultParams: KORONA_PARAMS,
  },
  unistream: {
    method: 'post',
    url: UNISTREAM_URL,
    defaultParams: UNISTREAM_PARAMS,
  },
};
const getRatesData = (systemName, parameters = {}) => {
  const { method, url, defaultParams } = systems[systemName];
  const params = { ...defaultParams, ...parameters };
  return axios[method](url, { params });
};

export { getRatesData };
