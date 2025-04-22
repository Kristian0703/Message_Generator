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

// Toggle accordion visibility for new messages
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
      renderMessageTable(); // Update the table
    }
});

// Populate the table with the existing messages
function renderMessageTable() {
  const tableBody = document.querySelector("#messageTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  messages.forEach((msg, index) => {
    const row = document.createElement("tr");
    const indexCell = document.createElement("td");
    const messageCell = document.createElement("td");

    indexCell.textContent = index + 1;
    messageCell.textContent = msg;

    row.appendChild(indexCell);
    row.appendChild(messageCell);
    tableBody.appendChild(row);
  });
}

// Toggle accordion visibility for sentences table
document.getElementById("toggleTable").addEventListener("click", function () {
  const tableContent = document.getElementById("tableContainer");
  tableContent.style.display =
    tableContent.style.display === "block" ? "none" : "block";
});

// Initial render of the message table
renderMessageTable();

