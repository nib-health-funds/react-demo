import React from 'react';
import classNames from 'classnames';

export default class ControlSelect extends React.Component {

  hasError() {
    return this.props.error && this.props.touched;
  }

  render() {
    const {name, label, options, ...props} = this.props;

    const controlClassName = classNames(
      'control', {
        'is-valid': !this.hasError(),
        'is-invalid': this.hasError()
      }
    );

    return (
      <div className={controlClassName}>
        <label className="control__label" htmlFor={name}>{label}</label>
        <select name={name} className="control__input" {...props}>
          {Object.keys(options).map(key =>
            <option value={key} key={key}>{options[key]}</option>
          )}
        </select>
        <p className="control__error">{this.props.error}</p>
      </div>
    );
  }

}

ControlSelect.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  options: React.PropTypes.object,
  touched: React.PropTypes.bool
};
