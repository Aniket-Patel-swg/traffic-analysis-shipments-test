const express = require('express');
const cookieParser = require('cookie-parser');

export const app = express();

// app.ts contains app specific configurations
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(cookieParser());
