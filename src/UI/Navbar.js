import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchUser } from '../services/githubService';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage if available
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState(null);
  const handleSearch = async () => {
    setError(null);
    try {
      const userData = await searchUser(username);
      if (userData) {
        setUser(userData);
      } else {
        setError('User not found');
      }
    } catch (error) {
      if (error.message === 'User not found') {
        setError('User not found');
      } else {
        setError('An error occurred while fetching user data');
      }
    }
  };
  

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <Link to="/" className="font-bold text-xl"><span className='text-blue-600'>GIT</span>HUB</Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-2 py-1 text-black mr-3 md:mb-0 "
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Search</button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </nav>
  );
};

export default Navbar;
