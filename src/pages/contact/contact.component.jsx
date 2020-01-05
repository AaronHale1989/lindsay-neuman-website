import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import * as emailjs from 'emailjs-com'


import './contact.styles.scss';

export default class Contact extends Component {
    state = {
        name: '',
        message: '',
        email: '',
    };

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }


      handleSubmit(e) {
        e.preventDefault()


        const { name, email, message } = this.state

        let templateParams = {
          name: name,
          email: email,
          message: message,
         }

         emailjs.send('lindsaysgordon', 'contact_13222', templateParams, 'user_1aXRbuz8m2Y2MNjIhvm40');
         this.resetForm()
     }

     resetForm() {
        this.setState({
          name: '',
          email: '',
          message: '',
        })
      }




    render() {
        return (
            <div className='form-container'>
            <Form className='main-form' onSubmit={this.handleSubmit.bind(this)} >
                <FormGroup>
                    <Label className='label' for='name'>Name:</Label>
                    <Input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'name')}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label className='label'  for='email'>Email:</Label>
                    <Input 
                        type='email'
                        name='email'
                        onChange={this.handleChange.bind(this, 'email')}
                        value={this.state.email}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label className='label'  for='message'>Message:</Label>
                    <Input 
                        className='message'
                        type='textarea'
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                    /> 
                </FormGroup>
                <div className='button-container'>
                    <Button>Submit</Button>
                </div>
            </Form>
            </div>
        )
    }
}

Contact.propTypes = {
    env: PropTypes.object.isRequired
  };
