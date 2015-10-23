import React from 'react';
import {Link} from 'cianca';

export default class Nav extends React.Component {

  render() {
    return <ul className="nib-nav">
      {this.context.router.routes.map(function(route) {
        if (route.name) {
          return <li className="nib-nav__item" key={route.name}>
            <Link name={route.name} className="nib-nav__link">{route.title || route.name}</Link>
          </li>;
        } else {
          return '';
        }
      })}
      </ul>;
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object.isRequired
};


