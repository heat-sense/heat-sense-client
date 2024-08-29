const sense = require('sense-hat-led');
const SenseHat = require('sense-hat');

// Create an instance of the SenseHat class
const senseHat = new SenseHat();

// Function to read sensor data
const readSensorData = async () => {
    try {
        const temperature = await senseHat.getTemperature();
        const humidity = await senseHat.getHumidity();
        const pressure = await senseHat.getPressure();

        console.log(`Temperature: ${temperature} °C`);
        console.log(`Humidity: ${humidity} %`);
        console.log(`Pressure: ${pressure} hPa`);
    } catch (error) {
        console.error('Error reading sensor data:', error);
    }
};

// Continuously read and display sensor data every 5 seconds
setInterval(readSensorData, 5000);