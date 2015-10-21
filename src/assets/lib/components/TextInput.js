import React from 'react';

export default class extends React.Component {

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return <input type="text" defaultValue={this.props.defaultValue}/>;
  }

}
