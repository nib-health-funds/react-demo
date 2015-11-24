import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import Layout from '../partials/Layout';

class Quote extends React.Component {
  render() {
    return (
      <Layout>

        <Helmet title="Quote"/>

        <h1 className="v2-title v2-title--1">Quote</h1>
        <h3 className="v2-title v2-title--3">You told us your name is {this.props.name}</h3>

      </Layout>
    );
  }
}

Quote.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default connect(state => state)(Quote);
