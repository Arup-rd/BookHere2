import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

import * as actions from 'actions';

export class Register extends React.Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false,
      message: ""
    }

    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(userData) {
    actions.register(userData).then(res => {
        console.log(res)
        this.setState({ message: "A verification mail has been sent to yoru email" })
      }, errors => {
        this.setState({ errors })
      }
    );
  }

  render() {
    const { errors } = this.state;


    return (
      <section id='register'>
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1>Register</h1>
              <RegisterForm submitCb={this.registerUser} errors={errors} />
              {this.state.message && <div className="alert alert-warning mt-3">{this.state.message}</div>}
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>
                <h2 className='catchphrase'>As our member you have access to most awesome places in the world.</h2>
                <img src={process.env.PUBLIC_URL + '/img/register-image.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
