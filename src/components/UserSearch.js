import React, { useState } from 'react';
import { searchUser } from '../services/githubService';
import UserProfile from './UserProfile';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    try {
      const userData = await searchUser(username);
      setUser(userData);
    } catch (error) {
      setError('User not found');
    }
  };
  return (
    <div>
      <div className="flex items-end space-x-2 ">
        <input 
          type="text" 
          placeholder="Enter username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Search</button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default UserSearch;
