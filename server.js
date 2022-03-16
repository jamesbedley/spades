const connectLivereload = require('connect-livereload');
const express = require('express');
const livereload = require('livereload');
const serveStatic = require('serve-static');
const path = require('path');

////

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

////

const app = express();

app.use(connectLivereload());
app.use('/spades', serveStatic(path.join(__dirname, 'public')));

app.listen(3000); //port
