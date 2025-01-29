# JavaScript Course

## Overview
Welcome to my **JavaScript Course** repository! This repo contains various small tasks I completed as part of my learning process during a JavaScript course. These tasks cover key concepts and practical applications of JavaScript.

### Task 1

You have an array of friends' names. Write a script that:

- Reads the list of friends and displays each name on the page.
- Each name will be displayed with animation: it will be hidden initially, then gradually fade in.
- After each name, add the word "best" after it.
- Change the style of the name "Arseniy" so that it stands out from the other names (e.g., change the text color to red).
- The page's header (h1) should read "My Friends".
- Use jQuery to manipulate the DOM and handle the animations.

### Task 2

You are given a task to generate a list of remainders based on a linear equation and then find the unique remainders. Write a JavaScript function that does the following:

Accepts three numbers as input:

- num1: The multiplier in the equation.
- num2: The constant added to the result.
- num3: The divisor used for finding the remainders.

For each integer x from 0 to num3-1, calculate the value of the expression (num1 * x + num2) % num3

After calculating, display:

- The number of unique remainders.
- The list of unique remainders.

### Task 3

Prompt the user to input the number of elements for both arrays.
Based on the number entered, ask the user to input the elements for both arrays one by one.
Compare the arrays element by element:
- If all elements match in the same order, alert that the arrays are the same.
- If any of the elements don't match or the arrays have different lengths, alert that the arrays are not the same.


### Task 4

Move the element in a square path: The element should start at a specific position on the screen and move right, down, left, and up, returning to its starting position in a continuous loop.
Handle user interaction: When the user clicks on the moving element, the animation should stop.

**Steps**:

The element starts at a defined position (initially positioned at top: 200px, left: 200px).
It moves to the right (increasing left while decreasing right).
Once it reaches the rightmost boundary (position 200), it moves down (increasing top and decreasing down).
Once it reaches the bottom boundary (position 200), it moves to the left (increasing left and decreasing right).
Once it reaches the leftmost boundary (position 200), it moves up (increasing down and decreasing top).
This cycle continues in a loop, and if the user clicks the element, the animation stops.





