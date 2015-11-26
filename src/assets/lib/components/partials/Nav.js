import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Nav extends React.Component {

  render() {
    return (
      <ul className="nib-nav">
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    );
  }
}
