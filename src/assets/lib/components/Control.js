import React from 'react';
import TextInput from './TextInput.js';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleBlur() {

  }

  filter() {

  }

  validate() {

  }

  render() {
    return <div className="control">
      <label htmlFor="abc">{this.props.label}</label>
      <TextInput defaultValue={this.props.defaultValue}/>
    </div>;
  }

}
