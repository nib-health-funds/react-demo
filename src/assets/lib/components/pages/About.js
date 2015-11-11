import React from 'react';
import {connect} from 'react-redux';
import {connectReduxForm} from 'redux-form';

import validate from '../../validate';
import Layout from '../partials/Layout';
import Control from '../Control';
import ControlGroup from '../ControlGroup';
import ControlSelect from '../ControlSelect';
import ControlRadio from '../ControlRadio';

class About extends React.Component {

  render() {
    const {fields: {title, name, phone, email, gender}, handleSubmit} = this.props;
    return (
      <Layout>

        <h1 className="v2-title v2-title--1">About You</h1>

        <ControlGroup onSubmit={handleSubmit}>
          <ControlSelect label="Title" options={{'': 'empty', mr: 'Mr', mrs: 'Mrs'}} {...title}/>
          <Control label="Name" {...name}/>
          <Control label="Phone" {...phone}/>
          <Control label="Email" {...email}/>
          <ControlRadio label="Gender" options={{male: 'Male', female: 'Female'}} {...gender}/>
        </ControlGroup>

      </Layout>
    );
  }

}

About.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

export default connect()(
  connectReduxForm({
    form: 'about',
    fields: ['title', 'name', 'phone', 'email', 'gender'],
    validate
  })(About)
);

