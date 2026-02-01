const axios = require('axios');


async function fetchWithError() {
  try {
    await axios.get('https://invalid-url-for-testing.com');
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


async function fetchWithHeadersAndParams() {
  return axios.get('https://example.com/api', {
    headers: {
      Authorization: 'Bearer test-token',
      'X-Custom-Header': 'CustomValue',
    },
    params: {
      page: 1,
      limit: 10,
    },
  });
}


async function fetchUserData() {
  try {
    const response = await axios.get('/users/1');
    return response.data;
  } catch (error) {
    throw new Error('Unable to fetch user');
  }
}

module.exports = {
  fetchWithError,
  fetchWithHeadersAndParams,
  fetchUserData,
};
