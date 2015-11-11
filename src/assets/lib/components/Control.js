import React from 'react';
import classNames from 'classnames';

export default class Control extends React.Component {

  hasError() {
    return this.props.error && this.props.touched;
  }

  render() {
    const {name, label, ...props} = this.props;

    const controlClassName = classNames(
      'control', {
        'is-valid': !this.hasError(),
        'is-invalid': this.hasError()
      }
    );

    return (
      <div className={controlClassName}>
        <label className="control__label" htmlFor={name}>{label}</label>
        <input type="text" name={name} className="control__input" {...props} />
        <p className="control__error">{this.props.error}</p>
      </div>
    );
  }

}

Control.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  touched: React.PropTypes.bool
};
