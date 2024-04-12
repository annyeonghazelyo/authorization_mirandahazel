// Get references to the buttons and modal elements
const adminBtn = document.getElementById('adminBtn');
const viewerBtn = document.getElementById('viewerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Function to display the modal
function showModal() {
    modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Add click event listener to the ADMIN button
adminBtn.addEventListener('click', () => {
    showModal();
});

// Add click event listener to the VIEWER button
viewerBtn.addEventListener('click', () => {
    // Redirect to the PUP website
    window.location.href = 'https://www.pup.edu.ph/';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    hideModal();
});

// Handle login button click inside the modal
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the entered credentials are correct
    if (username === 'ADMIN' && password === 'PASSWORD') {
        // Redirect to the PUP website
        window.location.href = 'https://www.pup.edu.ph/';
    } else {
        // Display error message and ask user to try again
        alert('Incorrect username or password. Please try again.');
    }
});
