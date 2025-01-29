# Custom Cipher Key Generator

## Overview
This project allows users to create their own custom cipher keys and encrypt or decrypt text based on the created key. Users can input a substitution cipher key for each letter of the Russian alphabet (from "б" to "н") and use this key to encrypt or decrypt text.

The tool provides a table to input custom substitutions and allows for encryption and decryption of text based on the created key.

## Features
- **Custom Cipher Key Creation**: Users can input their custom substitution key for letters "б" to "н".
- **Text Input**: Users can input text to be encrypted or decrypted using the custom key.
- **Encryption**: Converts the plain text into ciphered text using the user-defined key.
- **Decryption**: Converts the ciphered text back into the original text based on the user-defined key.
- **Interactive UI**: The project uses a table for key creation and buttons for encrypting and decrypting text.

## View
![img](https://res.cloudinary.com/daaivmxff/image/upload/v1738171111/task2_fbb6ur.png)

## How to Use
1. Open the `index.html` file in a web browser.
2. **Create a Cipher Key**:
   - Input a letter into each cell in the table corresponding to the Russian letters from "б" to "н" (for example, replace "б" with another letter or symbol).
   - The substitution for each letter will be used for both encryption and decryption.
3. **Encrypt Text**:
   - Type your text in the first text area.
   - Click the **"Шифровать"** (Encrypt) button to convert the text into its ciphered form using your key.
4. **Decrypt Text**:
   - To decrypt the ciphered text, click the **"Расшифровать"** (Decrypt) button to return to the original text.

## Files
- `index.html`: The HTML file containing the structure of the webpage and the table for key input.
- `style.css`: The CSS file used for styling the layout, buttons, and text areas.
- `logic.js`: The JavaScript file implementing the logic for encryption and decryption based on the custom key.

## Technologies Used
- **HTML**: For structuring the web page and creating the interactive form elements.
- **CSS**: For styling the page elements and providing a user-friendly layout.
- **JavaScript (jQuery)**: For handling the cipher logic and updating the UI based on user actions.

## How to Run
1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox, Edge).
3. Create your cipher key by filling in the table with your desired substitutions.
4. Input text into the provided text area and click on the **"Шифровать"** (Encrypt) or **"Расшифровать"** (Decrypt) buttons to test the functionality.
