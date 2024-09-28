// Get references to the input field, form, and output div
const form = document.querySelector('form');
const urlInput = document.querySelector('#url');
const outputDiv = document.querySelector('.output');
// console.log(typeof(outputDiv));

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting in the traditional way (i.e., page reload
  event.preventDefault();
  
  // Get the value entered in the input field
  const urlValue = urlInput.value;
  let endodedValue = encode(34938324750932475);
  let dd = decode(endodedValue);
  console.log(dd);

  // Display the value in the output div
  outputDiv.textContent = `Entered URL: ${urlValue} \n . `;
  
  // Optionally, you can clear the input field after submission
  urlInput.value = '';
});


const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const length = alphabet.length;


function encode(number) {
  
  let encoded = '';

  while (number > 0) {
    encoded = alphabet.charAt(number % length) + encoded;
    number = Math.floor(number / length);
  }

  return encoded;
}

function decode(encoded) {
  let number = 0;

  for (let i = 0; i < encoded.length; i++) {
    const symbol = encoded[i];
    const alphabeticPosition = alphabet.indexOf(symbol);

    if (alphabeticPosition === -1) {
      return new Error(`Invalid character: ${symbol}`);
    }

    number += alphabeticPosition * Math.pow(length, encoded.length - 1 - i);
  }

  return number;
}
