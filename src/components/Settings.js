import React, { useState } from 'react';

const Settings = ({ onToggle }) => {
  const [useCustomBackend, setUseCustomBackend] = useState(false);

  const handleToggle = () => {
    setUseCustomBackend(prevState => !prevState);
    onToggle(!useCustomBackend);
  };

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <div className="mr-3 font-bold text-gray-700">Use Custom Backend:</div>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={useCustomBackend}
            onChange={handleToggle}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
        </div>
      </label>
    </div>
  );
};

export default Settings;
