const express = require('express');
const path = require('path');

const initWebRouter = (app) => {
    app.use('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, '/public/login.html'));
    });
}

module.exports = {
    initWebRouter,
};