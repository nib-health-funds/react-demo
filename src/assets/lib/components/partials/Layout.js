import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};

export default Layout;
