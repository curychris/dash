const express = require('express');
const Chart = require('chart.js/auto');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/data', async (req, res) => {
    try {
        // Mock data (data dummy untuk testing)
        let data = [
            { timestamp: "2025-02-05T10:00:00Z", temperature: 25, humidity: 60, fire_intensity: 5, gasconcentration: 10 },
            { timestamp: "2025-02-05T10:05:00Z", temperature: 26, humidity: 58, fire_intensity: 6, gasconcentration: 12 },
            { timestamp: "2025-02-05T10:10:00Z", temperature: 27, humidity: 57, fire_intensity: 7, gasconcentration: 14 }
        ];

        // Urutkan data berdasarkan timestamp terbaru
        data.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data', message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
