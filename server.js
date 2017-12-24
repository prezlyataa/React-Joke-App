const express = require('express'),
    app = express(),
    path = require('path');

// for logging app
const winston = require('winston');

const renderApp = require(path.resolve(__dirname + '/renderApp'));

/* webpack middleware */
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const webpackCompiler = webpack(webpackConfig);

app.use(webpackMiddleware(
    webpackCompiler,
    {
        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: webpackConfig.output.publicPath,

        // display no info to console (only warnings and errors)
        noInfo: true,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: false,

        headers: {'X-Custom-Header': 'yes'},
        // custom headers

        // options for formatting the statistics
        stats: {
            colors: true
        }
    }
));


app.get(['/'], (req, res) => {
    res.send(renderApp());
});

app.use('/build', express.static(path.join(__dirname, '/build')));

const listener = app.listen(8000, () => {
    winston.log('info', `App listening on port ${listener.address().port}`);
});
