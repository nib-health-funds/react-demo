import React from 'react';
import classNames from 'classnames';

export default class ControlRadio extends React.Component {

  constructor() {
    super();
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    const {onBlur, value, name} = this.props;
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
    const {name, label, options, ...props} = this.props;

    const controlClassName = classNames(
      'control', {
        'is-valid': !this.hasError(),
        'is-invalid': this.hasError()
      }
    );

    return (
      <div className={controlClassName}>
        <label className="control__label">
          {label}
        </label>
        {Object.keys(options).map(key => (
            <label className="control__label" key={key}>
              <input {...props} type="radio" name={name} className="control__input" value={key}
                onBlur={this.handleBlur}
              />
              {options[key]}
            </label>
        ))}
        <p className="control__error">{this.props.error}</p>
      </div>
    );
  }
}


ControlRadio.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  options: React.PropTypes.object,
  touched: React.PropTypes.bool,
  value: React.PropTypes.string,
  onBlur: React.PropTypes.func
};
