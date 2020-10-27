import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from '../../api/auth'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { toast } from "react-toastify";

const intialForm = { email: '', password: '' };

function Login(props) {
  const [loginForm, setLoginForm] = useState(intialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const formRef = useRef(null)

  /*
  * onchange event for form handle
  */
  const onChange = (key, value) => {
    let form = { ...loginForm }
    form[key] = value;
    setLoginForm(form)
    setError(null)
  }

  /*
  * on login function to get user token and user data
  */
  const onSubmit = () => {
    if (loading) { return }
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please enter username and password");
      return;
    } else {
      setLoading(true);
      props.dispatch(loginUser(loginForm)).then(res => {
        console.log(res, 'res')
        setLoading(false);
        if (res.status === 200) {
          props.history.push("/products");
          toast.success('User logged in successfully')
        } else {
          setLoading(false);
          toast.error(res.message);
        }
      });
    }
  };

  /*
  * check is button disable
  */
  const isDisable = () => {
    if (!loginForm.email || !loginForm.password) {
      return true
    }
  }

  return (
    <div className="loginCon">
      <div className="innerContainer">
        <div className="loginContainer">
          <div className="loginLogoBox">
            <div className="logoBox">
              <img src="images/logoCircle.png" />
            </div>
          </div>

          <div className="loginBox">
            <ValidatorForm
              ref={formRef}
              onSubmit={event => { onSubmit(event); }}
              style={{ width: '100%' }}
            >
              <h3>Welcome to C&B Operations Workspace!</h3>
              <TextValidator
                label="Email address"
                onChange={(e) => onChange('email', e.target.value)}
                name="email"
                value={loginForm.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                fullWidth
                variant="outlined"
                className="formElement"
              />
              <TextValidator
                label="Password"
                onChange={(e) => onChange('password', e.target.value)}
                name="password"
                type="password"
                validators={['required']}
                errorMessages={['This field is required']}
                value={loginForm.password}
                fullWidth
                variant="outlined"
                className="formElement"
              />
              <div className="text-right forgotLink">
                <a onClick={() => props.history.push('forgotpassword')}>Forgot Password?</a>
              </div>
              <div className="btnCon text-center">
                <Button color="primary" className="mainBtn" disabled={isDisable()}>
                  {loading ?
                    'Singin in...'
                    :
                    'Sign In'
                  }
                </Button>
              </div>
              <p className="loginText">By clicking Sign In, you acknowledge that you have read and understood, and agree to Arrow's <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
            </ValidatorForm>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="text-center">
          <img src="/images/arrowLogo.svg" />
        </div>
        <p>Powered by Arrow © 2020. All rights reserved.</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);