const express = require('express');

const event_list = require('./event_list')

module.exports = function(app) {
    app.use(express.json())
    app.use(express.urlencoded( {extended: true} ))
    app.use('/css/', express.static('public/css'));


    app.use('/events/', event_list)
}