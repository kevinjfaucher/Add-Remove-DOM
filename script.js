// Select the input field, button, and container div first
const userInput = document.querySelector('#userInput');
const addButton = document.querySelector('#addButton');
const container = document.querySelector('#container');

// Add an event listener to the button
addButton.addEventListener('click', () => {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Add the user's input as the text content of the new div
    newDiv.textContent = userInput.value;

    // Add a class for styling if needed (optional)
    newDiv.className = 'user-div';

    // Add a click event listener to the new div to delete itself
    newDiv.addEventListener('click', () => {
        newDiv.remove();
    });

    // Append the new div to the container div on the page
    container.appendChild(newDiv);

    // Clear the input field after adding the text
    userInput.value = '';
});
