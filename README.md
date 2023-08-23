# Electric Vehicle (EV) Search Compare

Welcome to the Electric Vehicle (EV) Model Selector, a web application that allows users to filter and select electric vehicle models based on their preferences for vehicle type, price range, and driving range. It can also be used to compare different EV models for attributes such as Battery Size, Price, and Driving Range. This project is built using React and fetches data from an external source to provide users with information about various EV models.

## Features

- Filter EV models based on vehicle type, price range, and driving range preferences.
- Display detailed information about the selected EV models.
- User-friendly interface with dropdown menus and a submit button for ease of use.
- Compare EV models for attributes like Price, Driving Range, and more.

## Usage

Upon accessing the application, you'll see a navigation bar that links to "EVcompare" and "EVsearch," with "EVsearch" selected by default. In the "EVsearch" section, you can search for EV models with the following constraints:
- Vehicle type
- Price range
- Driving range

After making your selections, click the "Submit" button.

The application will display a list of filtered EV models that match your criteria, including details such as model name, type, price, battery information, driving range, and more.

In the "EVcompare" section, you can compare models based on attributes like Price, Range, etc.

## Project Setup
- Install ReactJs
- clone Repo
- cd EVsearch
- install dependencies, ie npm install
- Start Project using npm start

## Working

I used Google Sheets as the database for this project.


In the Google Sheets document, I used Google Apps Script to generate 4 REST APIs: `makes.gs`, `models.gs`, `output2.gs`, and `forsearching2.gs`. The first three are used for the comparison part, and the last one is for the search functionality of the app.

### EV Search Part

The `forsearching.gs` provides the following API:
- [Search API](https://script.google.com/macros/s/AKfycbweHn70wVoTs9yH52R3n0wlbbLKua88Ts8NwIHy-t3fGsGvSEpDWk-zTz8cb2NjXhoF/exec)

This API is used to fetch suitable vehicles for user queries. The EX showroom price column in the sheets contains values with commas, which makes it challenging to use for comparison. To address this, I added two new columns: "Price Range Category" and "Driving Range Category." This improved the code readability and reduced the complexity of comparisons.

For `Price Range Category`:
- Value 1 indicates prices below 1L
- Value 2 indicates prices between 1L-10L
- Value 3 indicates prices above 10L

For `Driving Range Category`:
- Value 1 indicates range below 200KM
- Value 2 indicates range between 200-400km
- Value 3 indicates range above 400km

The React application uses two state variables, `selectedPriceRange` and `selectedDrivingRange`, to capture user-selected preferences. A filter function is then used to iterate through the API and find values that match these states.

### EV Compare Part

This part involves three API calls:

1. `makes.gs` generates the API for knowing how many companies are available for a particular type of vehicle:
   - [Makes API](https://script.googleusercontent.com/macros/echo?user_content_key=EWdng17AQWmoxGDFy0qj6pppVgHQQnCJaoe57yCNLuXFPv6XIJlANjJxAIJEdToAF5CHTYKqGAyKB82eRX9CnK2wv8YbNFlwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD7LTDAgcsXj4QWRvWoLP8VrNqmYm0dTDsjivlZr5t-LRyJ_QT7YNmV_R_WFSfPfM4pHwhaJgUo7HfFcMr0Gi2HyAE-HlZfi1A&lib=MS1bqgT8n3LUBMH833Wm9V7qr18IHoUaO)

2. `models.gs` generates the API to establish the relation between Make and Model:
   - [Models API](https://script.googleusercontent.com/macros/echo?user_content_key=1MT4Fl8IHe-K19BYhREOwwnUGPuZFtfPLtxE2NWSkYfDtSNVLD3PJjeVRLWA1jKmjR5zDk5yF4dprOHoVkUSEE6Nk1sVVQpnm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMui92DJbVC1KUgDXgQmRcLmDCGh8mZ_L_V8lDGsN71zKZDZpIkhA3H_j2HNO9fS4b3O9zFdrYlF0IcAQOdvdJSEgu4uvD2lmQ&lib=MS1bqgT8n3LUBMH833Wm9V7qr18IHoUaO)

3. `output2.gs` generates the API to establish the relation between Model name and specifications like price, range, etc.:
   - [Output API](https://script.googleusercontent.com/a/macros/nitp.ac.in/echo?user_content_key=LTFgZ69JyPOQe1RJWP2J0LaY3y-9rG5gBLqUf8xyiDjbWgbexyJZyHw7ynGGGzJqnFtV2MvQ-KyPE7y8IXpBtpxdhnkiyaRUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9Gk3LAbHB0UyHaYKxUla6AWfbFZwADmYQjwh5IvUdBRNUiXVgZMMcrCbrgryMDhOEpr3lAaS7OHfWjqTT_0MTL68J59YEUUI-7ApwXyHo7hnEuoAshFFrEXMuqa_jo9BU&lib=MS1bqgT8n3LUBMH833Wm9V7qr18IHoUaO)

These APIs collectively enable the comparison of EV models based on attributes like Price, Range, etc.
``


### Steps to add new vehicle data

1. Fill google sheets row with vehicle values
2. Make sure to fill Price range category and Driving range category with accoring to values mentioned above
3. Save image of vehicle in public/images folder of the app 
4. Make sure the name of vehicle is same as the name given in Model column of sheets
   ie, Model name of vehicle is Revolt Bike in Google Sheets, then image should be saved as Revolt Bike.png
           <img src={`./images/${model.model}.png`} alt={model.model} />
            This is code used to fetch image
      
          



