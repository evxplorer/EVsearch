import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar.js';
import ChooseEV from './components/chooseEV.js';
import EVcompare from './components/comparison/EVcompare';

function App() {
  const [selectedOption, setSelectedOption] = useState('chooseEV'); // Set 'chooseEV' as the default selected option

  const handleNavigationClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <NavigationBar onNavigationClick={handleNavigationClick} />
      <div>
        {selectedOption === 'chooseEV' && <ChooseEV />}
        {selectedOption === 'compareEV' && <EVcompare />}
        {/* Add other components here based on other navigation options */}
      </div>
    </div>
  );
}

export default App;