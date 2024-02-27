// DataTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Twitter, Facebook, Instagram, GitHub } from '@mui/icons-material'; // Import icon components

const DataTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users');
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = (userId) => {
    console.log("click",userId)
    // Filter out the user with the given userId
    const updatedUsers = users.filter(user => user._id !== userId);
    // Update the state with the filtered users
    setUsers(updatedUsers);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Serial No.</TableCell>
            <TableCell>UID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Social Handles</TableCell>
            <TableCell>Action</TableCell> {/* New column for delete button */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,index) => (
            <TableRow key={user._id}>
            <TableCell>{index + 1}</TableCell> {/* Serial number starts from 1 */}
              <TableCell>{user.uniqueUserID}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {Object.entries(user.socialHandles).map(([key, value]) => (
                  <a key={key} href={value} target="_blank" rel="noopener noreferrer">
                    <IconButton style={{ marginRight: '8px' }}>
                      {key === 'twitter' && <Twitter />}
                      {key === 'facebook' && <Facebook />}
                      {key === 'instagram' && <Instagram />}
                      {key === 'github' && <GitHub />}
                    </IconButton>
                  </a>
                ))}
              </TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => handleDelete(user._id)}> {/* IconButton for delete */}
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
