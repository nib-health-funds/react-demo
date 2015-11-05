import React from 'react';
import {connect} from 'react-redux';
import {connectReduxForm} from 'redux-form';

import Layout from '../partials/Layout';
import Control from '../Control';
import ControlGroup from '../ControlGroup';
import ControlSelect from '../ControlSelect';
import ControlRadio from '../ControlRadio';

//TODO: move this somewhere else and use a validation package
function validate(data) {
  let errors = {};

  console.log(data);

  if (data.title === '') {
    errors.title = 'Please choose your title.'
  }

  if (data.name === '') {
    errors.name = 'Please enter your name so we can personalise your experience.';
  }

  if (data.phone === '') {
    errors.phone = 'Please enter your phone number so we can call you.';
  }

  if (data.email === '') {
    errors.email = 'Please enter your email address so we can contact you.';
  }

  if (data.gender == null) {
    errors.gender = 'Please choose your gender.';
  }

  return errors;
}

class About extends React.Component {

  render() {
    let {fields: {title, name, phone, email, gender}, handleSubmit} = this.props;
    return <Layout>

      <h1 className="v2-title v2-title--1">About You</h1>

      <ControlGroup onSubmit={handleSubmit}>
        <ControlSelect label="Title" options={{'': 'empty', mr: 'Mr', mrs: 'Mrs'}} {...title}/>
        <Control label="Name" {...name}/>
        <Control label="Phone" {...phone}/>
        <Control label="Email" {...email}/>
        <ControlRadio label="Gender" options={{male: 'Male', female: 'Female'}} {...gender}/>
      </ControlGroup>

    </Layout>;
  }

}

export default connect()(
  connectReduxForm({
    form: 'about',
    fields: ['title', 'name', 'phone', 'email', 'gender'],
    validate: validate
  })(About)
);

