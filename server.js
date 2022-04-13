require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json()); // we can send json to our express server to put in our req.body
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, () => {
    console.log("on" + PORT);
});