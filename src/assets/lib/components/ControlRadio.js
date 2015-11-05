import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {

  handleBlur(onBlur, value, name) {
    onBlur({
      target: {
        value,
        name
      }
    });
  }

  hasError() {
    return this.props.error && this.props.touched;
  }

  render() {
    const {name, label, options, onBlur, value: selectedValue, ...props} = this.props;
    return (
      <div className={classNames('control', {'is-valid': !this.hasError(), 'is-invalid': this.hasError()})}>
        <label className="control__label">
          {label}
        </label>
        {Object.keys(options).map(key => {
          return (
            <label className="control__label" key={key}>
              <input type="radio" name={name} className="control__input" {...props} value={key} onBlur={() => this.handleBlur(onBlur, selectedValue)} />
              {options[key]}
            </label>
          )
        })}
        <p className="control__error">{this.props.error}</p>
      </div>
    );
  }
}
