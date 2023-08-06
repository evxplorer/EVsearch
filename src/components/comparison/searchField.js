import React, { useState, useEffect } from 'react';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modelDetails, setModelDetails] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch the API data
    fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=DObuSrGc9Zd5fKZ0mQM1YL0t5rLlE_UcD3aZ0mWey04Y91klP-SaLvk2wi_AGwNXAw1p4O95RwHy_F8J331_4l0P-4WVQsSbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMui92DJbVC1KUgDXgQmRcLmDCGh8mZ_L_V8lDGsN71zKZDZpIkhA3H_j2HNO9fS4b3O9zFdrYlF0IcAQOdvdJSEgu4uvD2lmQ&lib=MS1bqgT8n3LUBMH833Wm9V7qr18IHoUaO'
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          // Extract the model names from the API response
          const models = Object.values(data.data).flat();
          setModelDetails(models);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Call clearSuggestions when searchTerm becomes empty
    if (searchTerm === '') {
      clearSuggestions();
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter the modelDetails based on the search term
    const filteredSuggestions = modelDetails.filter((model) =>
      model.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const clearSuggestions = () => {
    // Clear the suggestions when the search field is cleared
    setSuggestions([]);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="&#xF002; Search Models"
        id="search"
        name="search"
        style={{ fontFamily: 'FontAwesome' }}
        value={searchTerm}
        onChange={handleInputChange}
        onBlur={clearSuggestions} // Clear suggestions when the input loses focus
      />
      {/* Show suggestions as a custom suggestion menu */}
      {suggestions.length > 0 && (
        <div className="suggestion-menu">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item">
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
