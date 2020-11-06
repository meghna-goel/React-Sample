import React, { Component } from 'react';
import LOGO from '../images/user-bg.jpg';
import LOGOIMAGE from '../images/logo.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('enter')
  }

  handleChange = (e, name) => {
    console.log(e.target.value, 'value', name)
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    const { email } = this.state;
    console.log(email, 'email', this.state.password)
    return (
      <>
      <section className="user-structure">
        <div className="banner">
          <h1>Trusted by thousands</h1>
          <p>EngageAsap makes for a really powerful platform that takes care of all our conversion optimization requirements. </p>
        </div>
        <div className="form">
          <div className="form-wrapper">
            <img src={LOGOIMAGE} alt='logo' width='250' />
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className='form-group'>
                <label>EMAIL ID</label>
                <input className='form-control' type='text' name='email' placeholder='name@companyname.com' onChange={(e) => this.handleChange(e, 'email')} />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input className='form-control' type='password' name='password' placeholder='password' onChange={(e) => this.handleChange(e, 'password')} />
              </div>
              <button type='button' className='btn btn-primary btn-block' onClick={(e) => this.handleSubmit(e)}>LOGIN</button>
            </form>
          </div>
        </div>
      </section>
      <div className='login d-none'>
        <div className='split left'>
          <img className='filtered' src={LOGO} alt="image" />
          <div className='centered'>
            <div>Trusted by thousands</div>
            <div>engage app makes you feel good</div>
          </div>
        </div>
        <div className='split right'>
          <img src={LOGOIMAGE} alt='lo' />
          <span>Nike</span>
          <form>
            <div>
              <label>EMAIL ID</label>
              <input type='text' placeholder='name@companyname.com' />
            </div>
            <div>
              <label>Password</label>
              <input type='password' placeholder='password' />
              <span><img src={LOGOIMAGE} alt='lo' /></span>
            </div>
            <div>
              <input type='checkbox' />
              <span>Keep Me Logged In</span>
              {' '}
              <span className='link'>Forgot password?</span>
            </div>
            <button>LOGIN</button>
            <div>
              Don't have account yet? <span className='link'>Register now</span>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default Login;
