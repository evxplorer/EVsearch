import React, { useState, useEffect } from 'react';
import './chooseStyle.css';

const ChooseEV = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedDrivingRange, setSelectedDrivingRange] = useState('');
  const [rangeCategoryData, setRangeCategoryData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [filteredModelInfo, setFilteredModelInfo] = useState([]);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=FGVl2mkgg_foxw-7fbPSrJ4PhSmhtfaPqx7uYaQUM9Qdec4KcTW5c0eG5SJdk7OpM7WLsulTDuXw-sf6b-xFjnkqpAn7NNRvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMOxSUv00Kw0f1ya27Ib5dD2gCyP4BGvkmE4Sjf8TzNECcOZkX1hsKpeDNX8tdmnhYFr9wSigy_BJKVx2Kurs1rADwne-eKHwg&lib=MS1bqgT8n3LUBMH833Wm9V7qr18IHoUaO')
      .then(response => response.json())
      .then(data => {
        const uniqueTypes = Array.from(new Set(data.data.map(item => item.Type)));
        setTypes(uniqueTypes);
        setRangeCategoryData(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = () => {
      if (selectedType.length === 0 ) {
    // Show an alert if no options are selected
    alert("Please select at least type of vehicle before submitting.");
    return; // Exit the function to prevent further processing
  }
    const filteredData = rangeCategoryData.filter(item => {
      const typeMatches = types.length === 0 || selectedType.includes(item['Type']);
      const priceRangeCategoryMatches = selectedPriceRange === '' || item['Price Range Category'] === parseInt(selectedPriceRange);
      const drivingRangeCategoryMatches = selectedDrivingRange === '' || item['Driving Range Category'] === parseInt(selectedDrivingRange);
      return typeMatches && priceRangeCategoryMatches && drivingRangeCategoryMatches;
    });

    const filteredModelInfo = filteredData.map(item => ({
      model: item.Model,
      type: item.Type,
      exShowroomPrice: item['Ex Showroom Price'],
      batterySize: item['Battery Size'],
      batteryType: item['Battery Type'],
      chargerRating: item['Charger Rating'],
      drivingRange: item['Driving Range'],
      chargingTime: item['Charging Time'],
      priceRangeCategory: item['Price Range Category'],
      drivingRangeCategory: item['Driving Range Category']
    }));
    setFilteredModelInfo(filteredModelInfo);
    setShowResults(true);
  };

  return (
    <div>
      <div className='searchContainer'>
          <div className='input'>
          <h2>Find EV of your need......</h2>
          <div className='selectContainer'>
           
            <select id='Type' 
                  name='Type'
                  className='selectDesign'
                  defaultValue='' 
                  onChange={(e) => setSelectedType(e.target.value)}>
              <option value='' disabled>Select Type</option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className='selectContainer'>
            <select
              id='priceRange'
              name='priceRange'
              className='selectDesign'
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value='' disabled>
                Select Price Range
              </option>
              <option value='1'>Less than 1 Lakh</option>
              <option value='2'>2 - 10 Lakhs</option>
              <option value='3'>Above 10 Lakhs</option>
            </select>
          </div>

          <div className='selectContainer'>
            <select
              id='drivingRange'
              name='drivingRange'
              className='selectDesign'
              value={selectedDrivingRange}
              onChange={(e) => setSelectedDrivingRange(e.target.value)}
            >
              <option value='' disabled>
                Select Driving Range
              </option>
              <option value='1'>0 - 200 km</option>
              <option value='2'>200 - 400 km</option>
              <option value='3'>400+ km</option>
            </select>
          </div>

          <div className='submitContainer'> <br/><br/><br/>
            <button type='button' className='custom-button' onClick={handleSubmit}>Search</button>
          </div>
        </div>
        {/* input class closes */}
        {showResults && (
          <div className='resultContainer'>
            {filteredModelInfo.length === 0 ? (
              <p>No vehicles available with this specification</p>
            ) : (
              filteredModelInfo.map((model, index) => (
                <div key={index} className='modelDetailContainer'>
                <img src={`./images/${model.model}.png`} alt={model.model} />
                  <h3>{model.model}</h3>
  <table style={{ borderCollapse: 'collapse' }}>
  <tr>
                 <td><strong>Type </strong></td><td>{model.type}</td>
</tr>
  <tr>
    <td><strong>Ex Showroom Price</strong></td>
    <td>{model.exShowroomPrice} Rs</td>
  </tr>
  <tr>
    <td><strong>Battery Size</strong></td>
    <td>{model.batterySize}</td>
  </tr>
  <tr>
    <td><strong>Battery Type</strong></td>
    <td>{model.batteryType}</td>
  </tr>
  <tr>
    <td><strong>Charger Rating</strong></td>
    <td>{model.chargerRating}</td>
  </tr>
  <tr>
    <td><strong>Driving Range</strong></td>
    <td>{model.drivingRange} KM</td>
  </tr>
  <tr>
    <td><strong>Charging Time</strong></td>
    <td>{model.chargingTime} hrs</td>
  </tr>
</table>

                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseEV;
