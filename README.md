# Electric Vehicle (EV) Model Selector

Welcome to the Electric Vehicle (EV) Model Selector, a web application that allows users to filter and select electric vehicle models based on their preferences for vehicle type, price range, and driving range. Also can be used to compare different EV models for their Battery Size, Price, Driving Range etc. This project is built using React and fetches data from an external source to provide users with information about various EV models.

## Features

- Filter EV models based on vehicle type, price range, and driving range preferences.
- Display detailed information about the selected EV models.
- User-friendly interface with dropdown menus and a submit button for ease of use.
- Compare EV models for their Price, Driving Range etc.
  

## Usage

    Upon accessing the application, you'll be having a navigation bar that link to EVcompare and EVsearch with EVsearch is selected by defualt:
    In EVsearch, one can search for evmodel with following constraint
        Vehicle type
        Price range
        Driving range

    After making your selections, click the "Submit" button.

    The application will display a list of filtered EV models that match your criteria, including details such as model name, type, price, battery information, driving range, and more.

   In EvCompare section, can be used to compare models for their Price, Range etc



# Working
    I used google sheets as database for project.
    Sheet Link: https://docs.google.com/spreadsheets/d/1M1zOzXs7kiB1BsRRVdlY02Br3-4gnztzsCfsJ3_t2hk/edit#gid=717085733

    In the sheet, I selected Extenstion->AppScript. The will open up Google Sheets Appscript.
    On Appscript there are 4 rest APIs generated makes.gs, models.gs, output2.gs and forsearching2.gs. First three are for comparison part and last one is for searching part of the app. 
    forsearching.gs provides following API:
          https://script.google.com/macros/s/AKfycbweHn70wVoTs9yH52R3n0wlbbLKua88Ts8NwIHy-t3fGsGvSEpDWk-zTz8cb2NjXhoF/exec
          This is used to fetch fetch sutiable vehicle for user query. In EX showroom price column of sheets, price values contain commas in between. So API will recogince this as string and we cant use this values for comparison. Also if we remove this commas and try to provide integer values to API, values without commas will be printed in application, This will reduce readability of app. SO I added two new columns Price Range Category and Driving Range Category. 
          For 
          



