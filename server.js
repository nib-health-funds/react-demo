require('babel-core/register');

var express = require('express');
var React = require('react');
var ReactDOM = require('react-dom/server');

var Html = require('./src/assets/Html').default;
var App = require('./src/assets/App').default;

var app = express();

app.use(express.static(__dirname + '/dist'));

app.use((req, res) => {

  const component = React.createElement(App, {url: req.url});

  res.status(200);
  res.end(
    '<!doctype html>' +
    ReactDOM.renderToStaticMarkup(React.createElement(Html, {component: component}))
  );

});

const server = app.listen(3111, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App running at http://%s:%s', host, port);
});
