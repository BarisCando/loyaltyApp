import axios from 'axios';

const API_BASE_URL = 'https://api.extrazone.com';

const headers = {
  'Content-Type': 'application/json',
  'X-Country-Id': 'TR',
  'X-Language-Id': 'TR',
};

export const getPromotionsList = () => {
  return axios({
    method: 'GET',
    url: `${API_BASE_URL}/promotions/list?Channel=PWA`,
    headers: headers,
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching promotions list:', error);
    });
};

export const onTagPressed = (tagId: number) => {
  return axios({
    method: 'GET',
    url: `${API_BASE_URL}/promotions?Id=${tagId}`,
    headers: headers,
  })
    .then(response => response.data)
    .catch(e => console.log(e));
};
