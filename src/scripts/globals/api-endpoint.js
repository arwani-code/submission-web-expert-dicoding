import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `https://restaurant-api.dicoding.dev/detail/${id}`,
};

export default API_ENDPOINT;
