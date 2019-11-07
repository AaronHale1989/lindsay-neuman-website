import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

import './contact.styles.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className='form-container'>
            <Form className='main-form'>
                <FormGroup>
                    <Label className='label' for='name'>Name:</Label>
                    <Input 
                        type='text'
                        name='name'
                        onChange={this.handleChange}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label className='label'  for='email'>Email:</Label>
                    <Input 
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label className='label'  for='message'>Message:</Label>
                    <Input 
                        className='message'
                        type='textarea'
                        name='message'
                        onChange={this.handleChange}
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

export default Contact;