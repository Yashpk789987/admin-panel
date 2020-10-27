import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from '../../api/auth'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { toast } from "react-toastify";

const intialForm = {email: '', password: ''};

function ResetPassword(props) {
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

  const onSubmit = () => {
    if (loading) {return}
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please enter username and password");
      return;
    } else {
      setLoading(true);
      props.dispatch(loginUser(loginForm)).then(res => {
        setLoading(false);
        if (res.success) {
          props.history.push("/dashboard");
        } else {
          toast.error(res.message);
        }
      });
    }
  };

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

          <div className="loginBox forgotBox">
            <ValidatorForm
              ref={formRef}
              onSubmit={event => {onSubmit(event);}}
              style={{width: '100%'}}
            >
              <h3>New Password</h3>
              <p className="subHeading">Enter a new password for admin@cboperation.com</p>
              <TextValidator
                label="Email a new Password"
                onChange={(e) => onChange('email', e.target.value)}
                name="email"
                value={loginForm.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                fullWidth
                variant="outlined"
                className="formElement"
              />
              <div className="btnCon text-center">
                {/*<Button color="primary" className="mainBtn" disabled={isDisable()}>Save</Button>*/}
                <Button color="primary" type="button" className="mainBtn" onClick={() => props.history.push('/companyprofile')}>Save</Button>
              </div>
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
)(ResetPassword);