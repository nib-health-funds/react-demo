import React from 'react';
import Layout from '../partials/Layout';
import Control from '../components/Control';

export default class extends React.Component {
  render() {
    return <Layout>
      <h1 className="v2-title v2-title--1">About</h1>
      <Control label="Scale" defaultValue="Single"/>
    </Layout>;
  }
}
