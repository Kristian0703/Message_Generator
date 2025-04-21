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

// Event listener for the generate button
document.getElementById('generateMessage').addEventListener('click', function() {
    const message = generateRandomMessage();
    document.getElementById('messageDisplay').textContent = message;
});

// Function to clear the message display
function clearMessage() {
    document.getElementById('messageDisplay').textContent = '';
}

// Event listener for the clear button
document.getElementById("clearMessage").addEventListener("click", clearMessage);

// Toggle accordion visibility
document.getElementById("toggleInput").addEventListener("click", function () {
    const content = document.getElementById("inputContainer");
    content.style.display = content.style.display === "block" ? "none" : "block";
});

// Show toast when message added successfully
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// Add message to the messages array
document.getElementById("addMessageConfirm").addEventListener("click", function () {
    const input = document.getElementById("messageInput");
    const newMessage = input.value.trim();
    
    if (newMessage) {
        messages.push(newMessage);
        input.value = "";
        showToast("New message added!");
    }
});