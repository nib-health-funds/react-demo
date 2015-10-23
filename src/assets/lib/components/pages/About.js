import React from 'react';
import {connect} from 'react-redux';
import {connectReduxForm} from 'redux-form';

import Layout from '../partials/Layout';
import Control from '../Control';
import ControlGroup from '../ControlGroup';

//TODO: move this somewhere else and use a validation package
function validate(data) {
  let errors = {};

  if (data.name === '') {
    errors.name = 'Please enter your name so we can personalise your experience.';
  }

  if (data.phone === '') {
    errors.phone = 'Please enter your phone number so we can call you.';
  }

  return errors;
}

class About extends React.Component {

  render() {
    return <Layout>

      <h1 className="v2-title v2-title--1">About</h1>

      <ControlGroup onSubmit={this.props.handleSubmit}>
        <Control label="Name" {...this.props.fields.name}/>
        <Control label="Phone" {...this.props.fields.phone}/>
      </ControlGroup>

    </Layout>;
  }

}

export default connect()(
  connectReduxForm({
    form: 'about',
    fields: ['name', 'phone'],
    validate: validate
  })(About)
);

