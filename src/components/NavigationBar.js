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
      <ul className='center-container'>
          <a

            onClick={() => handleNavigationClick('chooseEV')}
            className={selectedTab === 'chooseEV' ? 'selected' : ''}
          >
           <button className='evsearchbtn'> EV Search </button>
           
           </a>
          <a

            onClick={() => handleNavigationClick('compareEV')}
            className={selectedTab === 'comparebuttonEV' ? 'selected' : ''}
          >
           <button className='evsearchbtn'>  EV Compare</button> 
          </a>
      </ul>
    </nav>
  );
};

export default NavigationBar;
 
