
import React from 'react';
import {renderToString} from 'react-dom/server';
import Helmet from 'react-helmet';

export default class Html extends React.Component {

  render() {
    const {store, children} = this.props;

    const state = JSON.stringify(store ? store.getState() : {});
    const content = children ? renderToString(children) : '';

    const head = Helmet.rewind();

    return (
      <html>
        <head>
          {head && head.title && head.title.toComponent()}
          <meta charSet="UTF-8"/>
          <link rel="stylesheet" href="bundled.css"/>
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__state__=${state}`}}/>
          <script src="bundled.js"></script>
        </body>
      </html>
    );
  }

}
