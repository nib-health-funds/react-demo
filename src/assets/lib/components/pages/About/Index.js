import React from 'react';
import {decorator} from 'the-other-redux-form';
import Helmet from 'react-helmet';
import Form from '@nib-components/react-form';

import validate from './validate';
import Layout from '../../partials/Layout';

class About extends React.Component {

  render() {
    const {form: {fields: {title, name, phone, email, gender}, onSubmit}} = this.props;

    return (
      <Layout>

        <Helmet title="About"/>

        <div g-xs="my2" g-md="my3" g-lg="my4 mx4">

          <Form theme="green" title="About You" onSubmit={onSubmit}>

            <Form.Control label="Title" {...title}>
              <Form.Select options={{'': 'empty', mr: 'Mr', mrs: 'Mrs'}}/>
            </Form.Control>

            <Form.Control label="Name" {...name}>
              <Form.Text/>
            </Form.Control>

            <Form.Control label="Phone" {...phone}>
              <Form.Text/>
            </Form.Control>

            <Form.Control label="Email" {...email}>
              <Form.Text/>
            </Form.Control>

            <Form.Control name="gender" label="Gender" {...gender}>
              <Form.RadioGroup name="gender" options={{male: 'Male', female: 'Female'}}/>
            </Form.Control>

          </Form>

        </div>

      </Layout>
    );
  }

}

About.propTypes = {
  form: React.PropTypes.object.isRequired
};

export default decorator({
  form: 'about',
  fields: ['title', 'name', 'phone', 'email', 'gender'],
  validate
})(About);

