// Simulated GPS data
let gpsData = { lat: 12.9716, lon: 77.5946 }; // Example GPS location (Bangalore)

// Function to send control commands (simulated)
function sendCommand(command) {
    console.log(`Command sent: ${command}`);
    alert(`Command sent: ${command}`);
}

// Function to update GPS location
function updateLocation() {
    document.getElementById("map").innerText = 
        `Location: Lat ${gpsData.lat}, Long ${gpsData.lon}`;
}

// Update location every 5 seconds
setInterval(updateLocation, 5000);

// Initial call to display location
updateLocation();