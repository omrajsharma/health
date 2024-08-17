const express = require('express')
require('dotenv').config()

const app = express();

app.get('/health', (req, res) => {
    console.log('Health API called');
    res.status(200).end('I am a healthy application :)')
})

app.listen(process.env.SERVER_PORT, 
    () => console.log(`Application is running on port: ${process.env.SERVER_PORT}`))