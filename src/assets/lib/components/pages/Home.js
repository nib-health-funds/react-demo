import React from 'react';
import {connect} from 'react-redux';

import Layout from '../partials/Layout';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className="v2-title v2-title--1">Home</h1>
      </Layout>
    );
  }
}

export default connect()(Home);
