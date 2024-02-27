import React, { useState, useEffect } from 'react';
import { getUserRepositories } from '../services/githubService';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Check if 'userData' exists in localStorage
    const userData = localStorage.getItem('userData');

    if (userData) {
      // Parse the JSON string to convert it into a JavaScript object
      const parsedUserData = JSON.parse(userData);

      // Access the 'login' property from the parsed user data
      const username = parsedUserData.login;

      // Fetch repositories using the retrieved username
      const fetchRepos = async () => {
        try {
          const repositories = await getUserRepositories(username);
          setRepos(repositories);
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      };

      fetchRepos();
    } else {
      console.log("User data not found in localStorage");
    }
  }, []);



  return (
    <div>
      {repos.length === 0 ? (
        <p className='text-2xl font-semibold text center'>No repositories found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map(repo => (
            <div key={repo.id} className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-gray-600">Active: {formatDate(repo.updated_at)}</p>
              <p className="text-gray-600">Stars: {repo.stargazers_count}</p>
              <p className="text-gray-600">Owner: {repo.owner.login}</p>
              <a href={repo.html_url} className="text-blue-500 hover:underline">URL</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepositoryList;
