const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the main index.html file
app.get('/', async (req, res) => {
    try {
        const headers = {
            'X-CMC_PRO_API_KEY': '75f505f3-1022-42ca-82e1-a626f71b16e9',
            'Content-Type': 'application/json'
        };

        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=CHEEKS';
        const response = await axios.get(url, { headers });


        console.log(response.data);
        const data = response.data.data.CHEEKS.self_reported_market_cap;


        const data2 = response.data.data.CHEEKS.self_reported_circulating_supply;

        var amount = formatNumber(data);


        var supply = formatNumber(data2);




        // Read the HTML file and inject the data
        const htmlFilePath = path.join(__dirname, 'index.html');
        let html = await fs.readFile(htmlFilePath, 'utf-8');



        // Use the correct variable (amount) here
        html = html.replace('Nan', ` $${amount}`);
        html = html.replace('950M', `${supply}`)



        res.send(html);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function formatNumber(number) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(2) + 'B';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(2) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(2) + 'K';
    } else {
        return number.toString();
    }
}
