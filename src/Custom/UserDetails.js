// UserDetails.js
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
};

export default UserDetails;
