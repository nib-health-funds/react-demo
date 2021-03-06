import React from 'react';

export default class Footer extends React.Component {

  getYear() {
    const now = new Date();
    return now.getFullYear();
  }

  render() {
    return <footer className="nib-footer">&copy; {this.getYear()} nib health funds</footer>;
  }

}
