// list of messages
const messages = [
  "Hello, world!",
  "Keep up the great work!",
  "You're doing awesome!",
  "Stay positive and keep going!",
  "Success is on the way!",
  "Believe in yourself!",
  "Make today amazing!"
];

// Function to generate a random message
function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Event listener for the button
document.getElementById('generateMessage').addEventListener('click', function() {
    const message = generateRandomMessage();
    document.getElementById('messageDisplay').textContent = message;
});