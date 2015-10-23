import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

export default class Layout extends React.Component {

  render() {
    return <div>
      <Header/>
      <Nav/>
      {this.props.children}
      <Footer/>
    </div>;
  }
}
