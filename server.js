const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');


const app=express();

app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(3000); //port
