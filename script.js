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
// Function to send control commands to ESP32
function sendCommand(command) {
    fetch(`http://<ESP32_IP>/control?command=${command}`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// Fetch GPS location from ESP32
function updateLocation() {
    fetch('http://<ESP32_IP>/gps')
        .then(response => response.text())
        .then(data => {
            document.getElementById("map").innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

// Update location every 5 seconds
setInterval(updateLocation, 5000);

// Initial call to display location
updateLocation();
