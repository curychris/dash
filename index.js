const express = require('express');
const Chart = require('chart.js/auto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Fungsi untuk mendapatkan timestamp millis()
function getMillisTimestamp() {
    return Date.now(); // Simulasi millis() dari IoT
}

// Endpoint untuk mendapatkan data sensor terbaru
app.get('/data', async (req, res) => {
    try {
        let data = [
            { timestamp: getMillisTimestamp(), temperature: 27.9, humidity: 43.5 },
        ];

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data', message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
