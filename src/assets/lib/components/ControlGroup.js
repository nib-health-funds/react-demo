import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <form className="control-group">
      {this.props.children}
    </form>;
  }

}
