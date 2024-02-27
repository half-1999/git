import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import RepositoryList from './components/RepositoryList';
import Settings from './components/Settings';
import Navbar from './UI/Navbar';
// import LeftSide from './components/LeftSide';
import UserProfile from './components/UserProfile';

function App() {
  const [useCustomBackend, setUseCustomBackend] = useState(false);

  const handleToggleBackend = (useCustom) => {
    setUseCustomBackend(useCustom);
  };

  return (
    <Router>
    <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<UserProfile  />} />
        </Routes>
        {/* <LeftSide/> */}
      </div>
    </Router>
  );
}

export default App;
