
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {getPrefetchedData} from 'react-fetcher';
import {Provider} from 'react-redux';
import {match, RoutingContext} from 'react-router';

import createStore from './lib/createStore';
import routes from './lib/routes';
import Html from './lib/components/Html';

const app = express();

app.use(express.static(`${__dirname}/../../dist`));

app.use((req, res) => {

  const store = createStore();

  match({routes, location: req.url}, (err, redirect, props) => {

    if (err) {
      return res
        .status(500)
        .send(err.message)
      ;
    }

    if (redirect) {
      return res
        .redirect(302, `${redirect.pathname}${redirect.search}`)
      ;
    }

    if (!props) {
      return res
        .status(404)
        .send('Not found')
      ;
    }

    getPrefetchedData(props.components, {}, {})
      .then(() => {

        const elements = (
          <Html store={store}>
            <Provider store={store}>
              <RoutingContext {...props} />
            </Provider>
          </Html>
        );

        res
          .status(200)
          .end(`<!doctype html>${ReactDOM.renderToStaticMarkup(elements)}`)
        ;

      })
      .catch(prefetchErr => {
        //console.log(err);
        res.status(500);
        res.end(prefetchErr);

      })
    ;

  });

});

app.listen(3111, 'localhost', () => {
  //const host = server.address().address;
  //const port = server.address().port;
  //console.log('App running at http://%s:%s', host, port);
});
