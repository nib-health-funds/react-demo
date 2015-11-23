
import React from 'react';
import ReactDOM from 'react-dom/server';

export default class Server extends React.Component {

  render() {
    const {store, component} = this.props;

    const state = JSON.stringify(store ? store.getState() : {});
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html>
        <head>
          <title>React Demo</title>
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
