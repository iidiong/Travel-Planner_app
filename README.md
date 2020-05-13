# Travel Planner App Project
Travel planner app project takes trip location and date from user, and displays weather and image of the location using information obtained from the external APIs.

## Table of Contents
- [Overview](#overview)

- [Instructions](#instructions)

- [How it works](#howItworks)

- [Project Structure](#projectStructure)

- [Extend Options](#ExtendOptions)

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection

## Project_Structure
1. Express app instance is pointed to the project folder with .html, .css, and .js files.
2. An API key for OpenWeatherMap.com is created
3. A JavaScript Object named projectData initiated in the file server.js act as the app API endpoint.
4. Local server should be running and producing feedback to the Command Line through a working callback function.

## How_it_works
1. User enters trip location in "Enter trip locaiton here" input field
2. User enters trip start date in "Enter start date" input field
3. User enters trip end date in "Enter end date" input field
4. User click "Search" button
5. Then, a request is sent to geonames api for location location information (latitude and logitude)
6. The location information is retived form the geonames response message and passed in Weatherbit API request for current      weather data
7. The trip location information entered is also passed in Pixabay API request to obtain the location image
8. The current temperature informaton and weather information is retrived from the response mesages
9. The UI is updated with the temperature data, current date, and image obtained
10. A copy of the data obtained is saved to the server
7. When a user clicks "Search" button without entering trip locaiton information, the last saved data from server.js is retrieved and update the UI
8. If user enters invalid information, most resent valid data is displayed


## Extend_Options
Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
Last search result is saved and could be retrived

## Credit for service worker code
Adding a Service Worker and Offline into your Web App
https://developers.google.com/web/fundamentals/codelabs/offline