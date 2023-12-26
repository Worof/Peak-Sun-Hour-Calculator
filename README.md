# Peak Sun Hours Calculator

## Overview

The Peak Sun Hours Calculator is a web-based tool designed to estimate the peak sun hours for a specific location and solar panel setup. It calculates optimal solar panel angles and uses local sunrise and sunset times to determine the average peak sun hours.

## Features

- **Solar Panel Angle Inputs**: Users can input the tilt and azimuth angles of their solar panels.
- **Sunrise and Sunset Time Inputs**: Users can enter local sunrise and sunset times.
- **Interactive Calculations**: The app calculates peak sun hours based on provided data.
- **Dynamic Warning Messages**: Guide users for invalid inputs.
- **Responsive Design**: Styled with CSS for a user-friendly interface.

## Possible Future Features

- **Automatic Location Detection**: Implementing geolocation to automatically determine the user's current location for sunrise and sunset calculations.
- **Seasonal Adjustment Calculator**: Adding a feature to adjust tilt and azimuth angles according to seasonal variations.
- **Shading Analysis Tool**: Including a tool to analyze potential shading from nearby objects or terrain.
- **Solar Energy Output Estimator**: Calculating estimated energy output based on peak sun hours and solar panel specifications.
- **Integration with Weather Services**: Providing real-time weather data integration to adjust calculations based on cloud cover and other weather conditions.
- **User Account and History Tracking**: Enabling users to create accounts and save their location and calculation history for future reference.

## How to Use

1. **Input Solar Panel Angles**: Enter the tilt and azimuth angles of the solar panel.
2. **Enter Sunrise and Sunset Times**: Provide local sunrise and sunset times.
3. **Calculate**: Click 'Calculate Peak Sun Hours' to view results.
4. **Reset**: Use 'Reset' to clear inputs and start over.

## Technologies Used

- **HTML**: Structures the web page.
- **CSS**: Styles the application.
- **JavaScript**: Powers interactive features and calculations.
- **SunCalc Library (v1.8.0)**: For solar position calculations.

## Limitations

- **Seasonal Variations**: Doesn't account for seasonal changes in the sun's position.
- **Shading and Obstructions**: Doesn't consider shading from nearby objects.

## Installation

1. **Clone the Repository**: `git clone [repository-url]`
2. **Open in a Browser**: Load `index.html` in any modern web browser.
