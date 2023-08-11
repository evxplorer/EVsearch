import React from 'react';
import './EVcompareStyle.css';
import VehicleForm from './detials.js'
import SearchField from './searchField';  

function EVcompare() {
  return (
    <div>
    <SearchField />
    <div className='ev'>
    <VehicleForm />
    <VehicleForm />
    <VehicleForm />
    </div>
    </div>
  );
}

export default EVcompare;
