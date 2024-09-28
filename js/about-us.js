// Function to update the current time
function updateTime() {
    const now = new Date(); // Get the current date and time
    const currentTime = now.toLocaleTimeString(); // Format the time
    document.getElementById('time').textContent = currentTime; // Display the time in the div
}

// Call updateTime once to display the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
