import React, { useEffect, useState } from 'react';
import RepositoryList from './RepositoryList';
import UserList from '../Custom/UserList';

const UserProfile = () => {
  const [parsedUserData, setParsedUserData] = useState(null);
  const [isUserListVisible, setIsUserListVisible] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const parsedUserDataFromStorage = JSON.parse(userData);
    setParsedUserData(parsedUserDataFromStorage);
  }, []);

  // Check if user object is defined before accessing its properties
  if (!parsedUserData) {
    return <div>Loading...</div>; // or any other placeholder or loading indicator
  }

  const handleToggleClick = () => {
    // Toggle the visibility state
    setIsUserListVisible(!isUserListVisible);
  };
  return (
    <div className="h-screen md:flex lg:w-full">
      {/* User Details Section */}
      <div className="bg-gray-500 p-4 w-full md:w-2/6 md:sticky top-0 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">User Details</h2>
        <p><img src={parsedUserData.avatar_url} alt="Profile" className='rounded-2xl h-[50%] mb-2 w-[50%] flex items-center'/></p>
        <p className='text-3xl font-semibold text-white'>{parsedUserData.name}</p>
        <p className='text-blue-600 text-xl font-bold mb-3'> {parsedUserData.login}</p>
        <p className='mb-5 text-white '> {parsedUserData.bio}</p>
        <p className='text-xl font-semibold text-white mb-2'> {parsedUserData.company}</p>
        <p className='text-2xl font-semibold mb-2 '> {parsedUserData.location}</p>
        <p className='mb-2 text-xl text-white'><strong> {parsedUserData.public_repos} Repos </strong></p>
        <p className='mb-2 text-xl text-white'><strong>{parsedUserData.followers} Followers</strong> </p>
        <p className='mb-2 text-xl text-white'><strong> {parsedUserData.following} Following </strong></p>
      </div>




      {/* Repository List Section */}
      <div className="p-2 bg-gray-500 overflow-y-auto md:w-4/6">
      <button 
  className={`bg-${isUserListVisible ? 'green' : 'blue'}-500 text-white w-full px-4 py-2 rounded hover:bg-${isUserListVisible ? 'green' : 'blue'}-600`}
  onClick={handleToggleClick}
>
  {isUserListVisible ? 'Show All Repo' : 'Show User List'}
</button>

      {isUserListVisible ? (
        <div>
        <>
          <h1 className='text-4xl m-3 text-center font-bold text-white'>User List</h1>
          <UserList/>
</>
        </div>
      ) : (
        <>
      <h1 className='text-4xl m-3 text-center font-bold text-white'>All Repositories</h1>
      <RepositoryList username={parsedUserData.login}/>
      </>
      )}
    </div>

    </div>
  );
};

export default UserProfile;
