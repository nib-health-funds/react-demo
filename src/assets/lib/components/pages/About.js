import React from 'react';
import {connect} from 'react-redux';
import {connectReduxForm} from 'redux-form';
import Form from '@nib-components/react-form';

import validate from '../../validate';
import Layout from '../partials/Layout';

class About extends React.Component {

  render() {
    const {fields: {title, name, phone, email, gender}, handleSubmit} = this.props;
    return (
      <Layout>

        <h1 className="v2-title v2-title--1">About You</h1>

        <Form theme="grey" onSubmit={handleSubmit}>

          <Form.Control label="Title">
            <Form.Select options={{'': 'empty', mr: 'Mr', mrs: 'Mrs'}} {...title}/>
          </Form.Control>

          <Form.Control label="Name">
            <Form.Text {...name}/>
          </Form.Control>

          <Form.Control label="Phone">
            <Form.Text {...phone}/>
          </Form.Control>

          <Form.Control label="Email">
            <Form.Text {...email}/>
          </Form.Control>

          <Form.Control label="Gender">
            <Form.RadioGroup options={{male: 'Male', female: 'Female'}} {...gender}/>
          </Form.Control>

        </Form>

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

