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
  tableBody.innerHTML = "";

  messages.forEach((msg, index) => {
    const row = document.createElement("tr");

    // Index cell
    const indexCell = document.createElement("td");
    indexCell.textContent = index + 1;

    // Action cell with icons
    const actionCell = document.createElement("td");

    // Delete icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash delete-icon";
    deleteIcon.title = "Delete message";
    deleteIcon.addEventListener("click", () => {
      messages.splice(index, 1);
      renderMessageTable();
    });

    // Edit icon
    const editIcon = document.createElement("i");
    editIcon.className = "fas fa-pen edit-icon";
    editIcon.title = "Edit message";
    editIcon.addEventListener("click", () => {
      // Replace the message cell with an input field
      const input = document.createElement("input");
      input.type = "text";
      input.value = msg;
      input.className = "edit-input";
      messageCell.innerHTML = "";
      messageCell.appendChild(input);
      input.focus();

      // Save on Enter or blur
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          saveEdit();
        }
      });
      input.addEventListener("blur", saveEdit);

      function saveEdit() {
        const updatedText = input.value.trim();
        if (updatedText !== "") {
          messages[index] = updatedText;
          renderMessageTable();
        } else {
          renderMessageTable(); // Reset if empty input
        }
      }
    });

    actionCell.appendChild(deleteIcon);
    actionCell.appendChild(editIcon);

    // Message cell
    const messageCell = document.createElement("td");
    messageCell.textContent = msg;

    row.appendChild(indexCell);
    row.appendChild(actionCell);
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

