import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    const userData = response.data;
    
    // Save user data in localStorage
    
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData;
  } catch (error) {
    throw error;
  }
};
// 

export const getUserRepositories = async (username) => {
  try {
    const token = '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'; // Replace 'YOUR_AUTH_TOKEN' with your actual token
    const options = {
      headers: {
        Authorization: `token ${token}`
      }
    };
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
