import React, { useState } from 'react';
import './Navstyle.css';

const NavigationBar = ({ onNavigationClick }) => {
  const [selectedTab, setSelectedTab] = useState('chooseEV');

  const handleNavigationClick = (tab) => {
    setSelectedTab(tab);
    onNavigationClick(tab);
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick('chooseEV')}
            className={selectedTab === 'chooseEV' ? 'selected' : ''}
          >
           <strong> EV Search </strong>
           
           </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick('compareEV')}
            className={selectedTab === 'compareEV' ? 'selected' : ''}
          >
           <strong>  EV Compare</strong> 
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
 
