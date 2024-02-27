import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRepositories = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repositories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
