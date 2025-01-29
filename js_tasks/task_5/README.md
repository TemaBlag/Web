# Remainder Count for Mathematical Functions 

## Overview
This project calculates the remainders of the function `y = x * (x + 1)` when divided by different values of `n` based on user input. The user can select from the following scenarios for the variable `n`:
1. Prime number.
2. Product of prime numbers.
3. Prime number raised to a power.

The tool will calculate the remainders for each scenario and display them on the page.

## Features
- **User Input**: The user can enter values for `n` and choose from three scenarios:
  1. A prime number.
  2. A product of prime numbers.
  3. A prime number raised to a power.
- **Remainder Calculation**: The function `y = x * (x + 1)` is calculated for values of `x` from 1 to `n`. The remainders are calculated for each value of `x`.
- **Display Results**: Shows the remainders and the calculated values of `y` for each value of `x`.

## View
![img](https://res.cloudinary.com/daaivmxff/image/upload/v1738171128/task5_nokxfl.png)


## How to Use
1. Open the `index.html` file in a web browser.
2. **Input the Values**:
   - Enter values for `n` and choose one of the three scenarios (Prime, Product of primes, or Prime raised to a power).
3. **Click the "Принять" Button**: This will trigger the calculation of the remainders and display the results.
4. **View Results**:
   - The remainders for each scenario will be displayed on the page, showing both the count of remainders and the remainders themselves.

## Files
- `index.html`: Contains the HTML structure of the webpage, including input fields for the variable `n` and buttons for calculation.
- `style.css`: The CSS file responsible for styling the layout and user interface.
- `logic.js`: The JavaScript file that handles the logic for the calculations and updates the page with the results.

## Technologies Used
- **HTML**: Used to structure the webpage and create input forms.
- **CSS**: Used for styling the page elements.
- **JavaScript (jQuery)**: Used to process the input, perform calculations, and dynamically update the webpage with results.

## How to Run
1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your web browser (e.g., Chrome, Firefox, or Edge).
3. Input a value for `n` and choose one of the three scenarios.
4. Click the **"Принять"** button to calculate and view the remainders.
